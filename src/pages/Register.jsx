import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import Social from "../share/Social";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";

const Register = () => {
  const { createSingUp } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createSingUp(data.email, data.password)
      .then(() => {
        toast.success("Register Successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error("Failed Register!", error);
      });
  };

  return (
    <div>
      <div className="card bg-base-100 w-full max-w-md mx-auto shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <h1 className="text-center font-bold pt-5 text-2xl">Welcome Back</h1>

          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              {...register("name")}
              type="text"
              className="input input-bordered"
              placeholder="Full Name"
              required
            />

            <label className="label">Email</label>
            <input
              {...register("email")}
              type="email"
              className="input input-bordered"
              placeholder="Email"
              required
            />

            <label className="label">Photo URL</label>
            <input
              {...register("photoURL")}
              type="text"
              className="input input-bordered"
              placeholder="Photo URL"
            />

            <label className="label">Password</label>
            <input
              {...register("password")}
              type="password"
              className="input input-bordered"
              placeholder="Password"
              required
            />

            <div className="text-right mt-2">
              <a className="link link-hover text-sm">Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-neutral my-4">
              Register
            </button>

            <p className="text-center">
              Don't have an account?{" "}
              <Link to="/login" className="text-red-400 font-semibold">
                Login
              </Link>
            </p>

            <div className="mt-4">
              <Social />
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
