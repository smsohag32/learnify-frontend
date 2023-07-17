import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import successImage from "../../assets/animation/success.json";
const StepThree = () => {
  const navigate = useNavigate();
  // handle to confirmation
  const handleConfirmation = () => {
    navigate("/");
  };
  return (
    <div className="w-full max-w-xl p-6 mx-auto bg-white rounded shadow-md">
      <div>
        <div className="flex flex-col gap-2 w-full text-center">
          <div className="md:w-[250px] mx-auto">
            <Lottie animationData={successImage} loop={true} width={100} />
            <p className="text-gray-500">
              Account Has Been Created. Login now.
            </p>
          </div>
        </div>
        <div className="text-center mt-6">
          <button className="outline-btn" onClick={handleConfirmation}>
            Go To Login Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
