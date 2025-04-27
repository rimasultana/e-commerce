import { useForm } from "react-hook-form";
import { Link, useLoaderData } from "react-router";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Update = () => {
  const edit = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axiosPublic.patch(`/products/${edit._id}`, data).then((res) => {
      if (res?.data?.acknowledged) {
        Swal.fire({
          title: "update data successfully!",
          icon: "success",
          draggable: true,
        }).catch((error) => {
          toast.error("Failed update data", error);
        });
      }
    });
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <Link to="/" className="text-blue-500 underline mb-4 inline-block">
          Back to home
        </Link>
        <h2 className="text-2xl font-bold text-center mb-6">Add a Product</h2>
        <p className="text-gray-600 text-center mb-8">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="">
              <span>Product Title</span>
            </label>
            <input
              defaultValue={edit.title}
              {...register("title")}
              type="text"
              placeholder="title"
              className="border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">
              <span>Product Title</span>
            </label>
            <input
              defaultValue={edit.quality}
              {...register("quality")}
              type="text"
              placeholder="Enter coffee supplier"
              className="border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">
              <span>description</span>
            </label>
            <input
              defaultValue={edit.description}
              {...register("description")}
              type="text"
              placeholder="description"
              className="border border-gray-300 p-10 rounded"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">
              <span>Photo URL</span>
            </label>
            <input
              defaultValue={edit.image}
              {...register("photo")}
              type="text"
              placeholder="Enter photo"
              className="border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="flex items-center justify-center py-2">
            <button
              type="submit"
              className="col-span-2 bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
            >
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
