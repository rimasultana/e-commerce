import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import Social from "../share/Social";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";

const Login = () => {
  const { loginUser } = useAuth();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then((res) => {
        console.log(res);
        toast.success("Login Successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error("Failed Login!try again!", error);
      });
  };
  return (
    <div className="">
      <div className="card bg-base-100 w-full max-w-md mx-auto shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <h1 className="text-center font-bold pt-5">Welcome to Back</h1>

          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              {...register("email")}
              type="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              {...register("password")}
              type="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral my-4">Login</button>
            <p className="text-center">
              Create an new account?{" "}
              <Link to={"/register"} className="text-red-400">
                Register
              </Link>{" "}
            </p>
            <div>
              <Social />
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
