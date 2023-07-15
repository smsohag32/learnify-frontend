import { useForm } from "react-hook-form";

const StepOne = ({ onNext }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleRegister = (userInfo) => {
    onNext();
  };

  return (
    <div className="w-full max-w-xl p-6 mx-auto bg-white rounded shadow-md">
      <form onSubmit={handleSubmit(handleRegister)}>
        <div className="flex gap-6 flex-col md:flex-row">
          <div className="mb-2 w-full">
            <label className="block text-gray-700 font-semibold mb-2">
              Full Name
            </label>
            <input
              {...register("name", {
                required: "This Field is required *",
              })}
              type="text"
              name="name"
              placeholder="Enter your name"
              className="primary-input"
            />
            {errors?.name && (
              <span className="text-red-600 block text-sm">
                <small>{errors.name?.message}</small>
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
            {errors?.email && (
              <span className="text-red-600 block text-sm">
                <small>{errors.email?.message}</small>
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
              className="primary-input"
              defaultValue={""}
              {...register("position", {
                required: "This Field is required *",
              })}
            >
              <option value="student">Student</option>
              <option value="Dr">Teacher</option>
            </select>
            {errors?.email && (
              <span className="text-red-600 block text-sm">
                <small>{errors.position?.message}</small>
              </span>
            )}
          </div>
        </div>
        <div className="flex gap-6 flex-col md:flex-row">
          <div className="mb-2 w-full">
            <label className="block text-gray-700 font-semibold mb-2">
              Institute Name
            </label>
            <select
              className="primary-input"
              defaultValue={"Select Institute Name"}
              {...register("institution_name", {
                required: "This Field is required *",
              })}
            >
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
        <div className="flex gap-6 flex-col md:flex-row">
          <div className="mb-2 w-full">
            <label className="block text-gray-700 font-semibold mb-2">
              Education Label
            </label>
            <select
              className="primary-input"
              {...register("education_level", {
                required: "This Field is required *",
              })}
            >
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
              <option value="Bachelor of Arts(BA)">Bachelor of Arts(BA)</option>
            </select>
            {errors?.education_level && (
              <span className="text-red-600 block text-sm">
                <small>{errors.education_level?.message}</small>
              </span>
            )}
          </div>
        </div>
        <div className="flex gap-6 flex-col md:flex-row">
          <div className="mb-2 w-full">
            <label className="block text- gray-700 font-semibold mb-2">
              Work Time
            </label>
            <select
              className="primary-input"
              defaultValue={""}
              {...register("type", {
                required: "This Field is required *",
              })}
            >
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
            </select>
            {errors?.type && (
              <span className="text-red-600 block text-sm">
                <small>{errors.type?.message}</small>
              </span>
            )}
          </div>
        </div>
        <button type="submit" className="primary-btn w-full mt-6 mx-auto">
          Next
        </button>
      </form>
    </div>
  );
};

export default StepOne;
