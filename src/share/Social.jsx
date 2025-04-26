import { toast } from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router";

import { FcGoogle } from "react-icons/fc";

const Social = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Login SuccessFully");
        navigate("/");
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
