import { toast } from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router";

import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Social = () => {
  const { googleLogin, user } = useAuth();
  console.log(user);
  const axiosPublic = useAxiosPublic();

  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        const userInfo = {
          email: res?.user?.email,
          name: res?.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res);
          if (res?.data?.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Register Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          } else {
            Swal.fire({
              position: "top-top",
              icon: "success",
              title: "Login Successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          }
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div>
      <div>
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border border-white/30 hover:border-purple-300 hover:bg-white/10 transition text-black font-semibold py-2 rounded-xl shadow-sm"
        >
          <FcGoogle className="text-2xl " />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Social;
