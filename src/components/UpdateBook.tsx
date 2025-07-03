import { useForm, type SubmitHandler } from "react-hook-form";
import { useParams, useNavigate } from "react-router";
import {
  useGetBookQuery,
  useUpdateBookMutation,
} from "../redux/features/Books/bookApi";
import type { IBook } from "../interfaces/book.interface";
import Swal from "sweetalert2";

const UpdateBook = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data, isLoading } = useGetBookQuery(id, { skip: !id });
  const [updateBook] = useUpdateBookMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IBook>({
    defaultValues: data?.data,
    values: data?.data,
  });

  const onSubmit: SubmitHandler<IBook> = async (formData) => {
    if (!id) return;
    const result = await updateBook({ id, payload: formData });
    if (result.data?.success) {
      Swal.fire({
        icon: "success",
        title: "Book updated successfully!",
        timer: 1500,
        showConfirmButton: false,
      });
      navigate("/books");
      reset();
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Update Book</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              {...register("title", { required: true })}
              className="input input-bordered w-full"
            />
            {errors.title && (
              <span className="text-red-500 text-sm">Title is required</span>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Author</span>
            </label>
            <input
              type="text"
              {...register("author", { required: true })}
              className="input input-bordered w-full"
            />
            {errors.author && (
              <span className="text-red-500 text-sm">Author is required</span>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Genre</span>
            </label>
            <select
              {...register("genre", { required: true })}
              className="select select-bordered w-full"
              defaultValue={data?.data?.genre || ""}
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
              <span className="label-text">ISBN</span>
            </label>
            <input
              type="text"
              {...register("isbn", { required: true })}
              className="input input-bordered w-full"
            />
            {errors.isbn && (
              <span className="text-red-500 text-sm">ISBN is required</span>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Copies</span>
            </label>
            <input
              type="number"
              min={1}
              {...register("copies", { required: true, min: 1 })}
              className="input input-bordered w-full"
            />
            {errors.copies && (
              <span className="text-red-500 text-sm">Copies is required</span>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              {...register("description", { required: true })}
              className="textarea textarea-bordered w-full"
              rows={4}
            />
            {errors.description && (
              <span className="text-red-500 text-sm">
                Description is required
              </span>
            )}
          </div>
          <button type="submit" className="btn btn-primary w-full mt-4">
            Update Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;
