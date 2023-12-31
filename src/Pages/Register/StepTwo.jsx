import { useForm } from "react-hook-form";
import EyeIconButton from "../../components/Button/EyeButton";
import { useState } from "react";
import userRegister from "../../utils/userRegister";
import { Link, useNavigate } from "react-router-dom";
import IconSpin from "../../components/Spinner/IconSpin";

// step two user register
const StepTwo = ({ onNext, userInfo }) => {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);
  const [registerErr, setRegisterErr] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch("password", "");

  // handle user register
  const handleRegister = (passwordInfo) => {
    setRegisterErr("");
    // check to step one information and make a obj
    if (typeof userInfo == "object") {
      const userData = {
        full_name: userInfo?.full_name,
        email: userInfo?.email,
        position: userInfo?.position,
        institution_name: userInfo?.institution_name,
        education_level: userInfo?.education_level,
        work_time: userInfo?.work_time,
        password: passwordInfo?.password,
        confirm_password: passwordInfo?.confirm_password,
      };

      userRegister(userData)
        .then((data) => {
          if (data) {
            setLoading(false);
            onNext();
          } else {
            setLoading(false);
          }
        })
        .catch((err) => {
          setRegisterErr(err?.response?.data?.error);
        });
    }
  };
  return (
    <div className="w-full max-w-xl p-6 mx-auto bg-white rounded shadow-md">
      <h4 className="font-medium text-xl text-center">Security</h4>
      <form onSubmit={handleSubmit(handleRegister)}>
        <div className="mb-4 relative">
          <label className="block text-gray-700 font-semibold mb-2">
            New password
          </label>
          <input
            {...register("password", {
              required: "This Field is required *",
            })}
            type={`${isShow ? "text" : "password"}`}
            name="password"
            placeholder="Enter new password"
            className="primary-input"
          />
          <EyeIconButton
            isShow={isShow}
            isError={errors?.password}
            setIsShow={setIsShow}
          />
          {errors?.password && (
            <span className="text-red-600 block text-sm">
              <small>{errors.password?.message}</small>
            </span>
          )}
        </div>
        <div className="mb-4 relative">
          <label className="block text-gray-700 font-semibold mb-2">
            Confirm password
          </label>
          <input
            {...register("confirm_password", {
              required: "This field is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            type={`${isShow ? "text" : "password"}`}
            name="confirm_password"
            placeholder="Enter new password"
            className="primary-input"
          />
          <EyeIconButton
            isError={errors?.confirm_password}
            isShow={isShow}
            setIsShow={setIsShow}
          />
          {errors?.confirm_password && (
            <span className="text-red-600 block text-sm">
              <small>{errors.confirm_password?.message}</small>
            </span>
          )}
        </div>
        {registerErr && (
          <div className="text-center text-red-600 mt-4">
            <p className="flex gap-1">
              <small>{registerErr}</small>
              <Link to="/" className="primary-text font-bold">
                Try again
              </Link>
            </p>
          </div>
        )}
        <button
          disabled={loading}
          type="submit"
          className="primary-btn w-full mt-6 mx-auto"
        >
          {loading ? <IconSpin /> : "Next"}
        </button>
      </form>
    </div>
  );
};

export default StepTwo;
