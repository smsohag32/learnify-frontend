import { Rings } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <Rings
        height="80"
        width="80"
        color="#00a8e8"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </div>
  );
};

export default Spinner;
