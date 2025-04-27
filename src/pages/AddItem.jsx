import React from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { Link } from "react-router";
import Swal from "sweetalert2";

const AddItem = () => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    axiosPublic
      .post("/products", data)
      .then((res) => {
        console.log(res);
        if (res?.data?.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        }
      })
      .catch((error) => {
        toast.error("Failed to post data!");
        console.error(error);
      });
  };
  return (
    <div>
      <div className="card bg-base-100 w-full max-w-lg mx-auto shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <Link to={"/"}>
            <button className="text-blue-300 underline">go to home</button>
          </Link>
          <fieldset className="fieldset">
            <h1 className="text-center font-bold text-3xl">Post Item</h1>
            <label className="label">Title</label>
            <input
              {...register("title")}
              type="text"
              className="input"
              placeholder="Enter title"
            />
            <label className="label">description</label>
            <input
              {...register("description")}
              type="text"
              className="input"
              placeholder="description"
            />
            <label className="label">quality</label>
            <input
              {...register("quality")}
              type="text"
              className="input"
              placeholder="quility"
            />
            <label className="label">Photo</label>
            <input
              {...register("image")}
              type="text"
              className="input"
              placeholder="photo"
            />

            <button className="btn btn-neutral mt-4">Add item</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
