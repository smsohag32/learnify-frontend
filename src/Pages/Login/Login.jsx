import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import EyeIconButton from "../../components/Button/EyeButton";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const [loginErr, setLoginErr] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/dashboard";
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // handle to login user
  const handleLogin = (userInfo) => {
    const email = userInfo.email;
    const password = userInfo.password;
  };

  return (
    <div className="flex items-center h-[calc(100vh-80px)]">
      <div className="default-container py-9">
        <div className="w-full max-w-sm mx-auto p-6 bg-white rounded shadow-md">
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-4">Welcome to Learnify</h1>
            <p className="text-gray-600 mb-8">Log in to your account</p>
          </div>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="mb-2">
              <label className="block text-gray-700 font-semibold mb-2">
                Email Address*
              </label>
              <input
                {...register("email", {
                  required: "This Field is required *",
                })}
                type="email"
                name="email"
                placeholder="Enter email address"
                className="primary-input"
              />
              {errors?.email && (
                <span className="text-red-600 block text-sm">
                  <small>{errors.email?.message}</small>
                </span>
              )}
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700 font-semibold mb-2">
                Password*
              </label>
              <input
                {...register("password", {
                  required: "This Field is required *",
                })}
                type={`${isShow ? "text" : "password"}`}
                name="password"
                placeholder="Enter password"
                className="primary-input"
              />
              <EyeIconButton isShow={isShow} setIsShow={setIsShow} />
              {errors?.password && (
                <span className="text-red-600 block text-sm">
                  <small>{errors.password?.message}</small>
                </span>
              )}
            </div>
            <button
              disabled={loading}
              type="submit"
              className="primary-btn w-full mx-auto"
            >
              Log in
            </button>
          </form>
          {loginErr && (
            <div className="text-center text-red-600 mt-4">
              <p>
                <small>{loginErr}</small>
              </p>
            </div>
          )}
          <p className="mt-8 text-sm text-black w-full text-center">
            Don't have an account? Please
            <Link to="/register" className="ms-2 primary-text font-semibold">
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
