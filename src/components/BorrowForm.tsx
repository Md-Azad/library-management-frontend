import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import type { Inputs } from "../interfaces/input.interface";
import { useBorroBookMutation } from "../redux/features/Borrow/borrowApi";
import Swal from "sweetalert2";

const BorrowForm = () => {
  const [borrowBook] = useBorroBookMutation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!id) {
      throw new Error("Book id is missing");
    }
    const result = await borrowBook({ id: id, payload: data });
    if (result.data.success) {
      Swal.fire({
        title: "Borrowed!",
        text: "Your book has been borrowed.",
        icon: "success",
      });
      navigate("/books");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Borrow Book</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="number"
              min={1}
              defaultValue={1}
              {...register("quantity", { required: true, min: 1 })}
              className="input input-bordered w-full"
            />
            {errors.quantity && (
              <span className="text-red-500 text-sm">Quantity is required</span>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Due Date</span>
            </label>
            <input
              type="date"
              {...register("dueDate", { required: true })}
              className="input input-bordered w-full"
            />
            {errors.dueDate && (
              <span className="text-red-500 text-sm">Due Date is required</span>
            )}
          </div>
          <button type="submit" className="btn btn-primary w-full mt-4">
            Borrow
          </button>
        </form>
      </div>
    </div>
  );
};

export default BorrowForm;
