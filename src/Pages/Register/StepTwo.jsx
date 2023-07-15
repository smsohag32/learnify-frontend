import { useForm } from "react-hook-form";
import EyeIconButton from "../../components/Button/EyeButton";
import { useState } from "react";

const StepTwo = ({ onNext }) => {
  const [isShow, setIsShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();
  const password = watch("password", "");

  const handleRegister = (userInfo) => {
    onNext();
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
          <EyeIconButton isShow={isShow} setIsShow={setIsShow} />
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
          <EyeIconButton isShow={isShow} setIsShow={setIsShow} />
          {errors?.confirm_password && (
            <span className="text-red-600 block text-sm">
              <small>{errors.confirm_password?.message}</small>
            </span>
          )}
        </div>
        <button type="submit" className="primary-btn w-full mt-6 mx-auto">
          Next
        </button>
      </form>
    </div>
  );
};

export default StepTwo;
