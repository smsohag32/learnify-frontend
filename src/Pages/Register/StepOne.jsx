import { useState } from "react";
import { useForm } from "react-hook-form";

const StepOne = ({ onNext, setUserInfo }) => {
  const [position, setPosition] = useState("");
  const [positionErr, setPositionErr] = useState("");
  //  hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // handle register to next step store information in a state
  const handleRegister = (information) => {
    setUserInfo({ ...information, position: position });
    onNext();
  };
  console.log(position);
  return (
    <div className="w-full max-w-xl p-6 mx-auto bg-white rounded shadow-md">
      <form onSubmit={handleSubmit(handleRegister)}>
        <div className="flex gap-6 flex-col md:flex-row">
          <div className="mb-2 w-full">
            <label className="block text-gray-700 font-semibold mb-2">
              Full Name
            </label>
            <input
              {...register("full_name", {
                required: "This Field is required *",
              })}
              type="text"
              name="full_name"
              placeholder="Enter your full name"
              className="primary-input"
            />
            {errors?.full_name && (
              <span className="text-red-600 block text-sm">
                <small>{errors.full_name?.message}</small>
              </span>
            )}
          </div>
        </div>
        <div className="flex gap-6 flex-col md:flex-row">
          <div className="mb-2 w-full">
            <label className="block text-gray-700 font-semibold mb-2">
              Email Address
            </label>
            <input
              {...register("email", {
                required: "This Field is required *",
              })}
              type="email"
              name="email"
              placeholder="Enter your email"
              className="primary-input"
            />
            {positionErr && (
              <span className="text-red-600 block text-sm">
                <small>{positionErr}</small>
              </span>
            )}
          </div>
        </div>
        <div className="flex gap-6 flex-col md:flex-row">
          <div className="mb-2 w-full">
            <label className="block text-gray-700 font-semibold mb-2">
              Position
            </label>
            <select
              defaultValue=""
              onChange={(e) => setPosition(e.target.value)}
              className="primary-input"
              required
            >
              <option value="" disabled hidden>
                Select Position--
              </option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
            {errors?.email && (
              <span className="text-red-600 block text-sm">
                <small>{errors.position?.message}</small>
              </span>
            )}
          </div>
        </div>
        {position && (
          <div className="flex gap-6 flex-col md:flex-row">
            <div className="mb-2 w-full">
              <label className="block text-gray-700 font-semibold mb-2">
                Institute Name
              </label>
              <select
                defaultValue=""
                placeholder="Please Select Institute Name"
                className="primary-input"
                {...register("institution_name", {
                  required: "This Field is required *",
                })}
              >
                <option value="" disabled hidden>
                  Select Institute Name--
                </option>
                <option value="Dhaka National Medical College">
                  Dhaka National Medical College
                </option>
                <option value="Ibrahim Medical College">
                  Ibrahim Medical College
                </option>
                <option value="Bangladesh Medical College">
                  Bangladesh Medical College
                </option>
                <option value="Holy Family Red Crescent Medical College">
                  Holy Family Red Crescent Medical College
                </option>
              </select>
              {errors?.institution_name && (
                <span className="text-red-600 block text-sm">
                  <small>{errors.institution_name?.message}</small>
                </span>
              )}
            </div>
          </div>
        )}
        {position === "student" && (
          <div className="flex gap-6 flex-col md:flex-row">
            <div className="mb-2 w-full">
              <label className="block text-gray-700 font-semibold mb-2">
                Education Label
              </label>
              <select
                defaultValue=""
                className="primary-input"
                {...register("education_level", {
                  required: "This Field is required *",
                })}
              >
                <option value="" disabled hidden>
                  Select Education Label--
                </option>
                <option value="Secondary School Certificate (SSC)">
                  Secondary School Certificate (SSC)
                </option>
                <option value="Higher Secondary School Certificate (HSC)">
                  Higher Secondary School Certificate (HSC)
                </option>
                <option value="Diploma">Diploma</option>
                <option value="Bachelor of Science (BSC)">
                  Bachelor of Science (BSC)
                </option>
                <option value="Master of Arts(MA)">Master of Arts(MA)</option>
                <option value="Bachelor of Arts(BA)">
                  Bachelor of Arts(BA)
                </option>
              </select>
              {errors?.education_level && (
                <span className="text-red-600 block text-sm">
                  <small>{errors.education_level?.message}</small>
                </span>
              )}
            </div>
          </div>
        )}
        {position === "teacher" && (
          <>
            <div className="flex gap-6 flex-col md:flex-row">
              <div className="mb-2 w-full">
                <label className="block text- gray-700 font-semibold mb-2">
                  Work Time
                </label>
                <select
                  className="primary-input"
                  defaultValue=""
                  {...register("work_time", {
                    required: "This Field is required *",
                  })}
                >
                  <option value="" disabled hidden>
                    Select work time--
                  </option>
                  <option value="full_time">Full Time</option>
                  <option value="part_time">Part Time</option>
                </select>
                {errors?.type && (
                  <span className="text-red-600 block text-sm">
                    <small>{errors.type?.message}</small>
                  </span>
                )}
              </div>
            </div>
          </>
        )}
        <button type="submit" className="primary-btn w-full mt-6 mx-auto">
          Next
        </button>
      </form>
    </div>
  );
};

export default StepOne;
