import { useForm, type SubmitHandler } from "react-hook-form";
import type { IBook } from "../interfaces/book.interface";
import { useCreateBookMutation } from "../redux/features/Books/bookApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const CreateBook = () => {
  const [createBook] = useCreateBookMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IBook>();
  const onSubmit: SubmitHandler<IBook> = async (data) => {
    const result = await createBook(data);
    if (result.data.success) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Book Created successfully.",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/books");
      reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong!${errors}`,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 ">
      <div className="bg-gray-400 shadow-lg rounded-lg px-4 pb-4 my-2 w-11/12 lg:w-1/2  ">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Book</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <label className="label">
              <span className="label-text">Title*</span>
            </label>
            <input
              type="text"
              {...register("title", { required: true })}
              className="input input-bordered w-full"
              placeholder="Enter book title"
            />
            {errors.title && (
              <span className="text-red-500 text-sm">Title is required</span>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Author*</span>
            </label>
            <input
              type="text"
              {...register("author", { required: true })}
              className="input input-bordered w-full"
              placeholder="Enter the author name"
            />
            {errors.author && (
              <span className="text-red-500 text-sm">Author is required</span>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Genre*</span>
            </label>
            <select
              {...register("genre", { required: true })}
              className="select select-bordered w-full"
              defaultValue="Select Genre"
            >
              <option value="" disabled>
                Select genre
              </option>
              <option value="FICTION">FICTION</option>
              <option value="SCIENCE">SCIENCE</option>
              <option value="HISTORY">HISTORY</option>
              <option value="BIOGRAPHY">BIOGRAPHY</option>
              <option value="FANTASY">FANTASY</option>
            </select>
            {errors.genre && (
              <span className="text-red-500 text-sm">Genre is required</span>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">ISBN*</span>
            </label>
            <input
              type="text"
              {...register("isbn", { required: true })}
              className="input input-bordered w-full"
              placeholder="Enter book's isbn number"
            />
            {errors.isbn && (
              <span className="text-red-500 text-sm">ISBN must be unique</span>
            )}
          </div>

          <div>
            <label className="label">
              <span className="label-text">Copies*</span>
            </label>
            <input
              type="number"
              min={1}
              {...register("copies", { required: true, min: 1 })}
              className="input input-bordered w-full"
              placeholder="Enter Copies number"
            />
            {errors.copies && (
              <span className="text-red-500 text-sm">
                Copies value must be more than 0
              </span>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Description*</span>
            </label>
            <textarea
              {...register("description", { required: true })}
              className="textarea textarea-bordered w-full"
              rows={4}
              placeholder="Enter book description"
            />
            {errors.description && (
              <span className="text-red-500 text-sm">
                Description is required
              </span>
            )}
          </div>
          <button type="submit" className="btn btn-primary w-full mt-4">
            Create Book
          </button>
        </form>
      </div>
    </div>
  );
};
export default CreateBook;
