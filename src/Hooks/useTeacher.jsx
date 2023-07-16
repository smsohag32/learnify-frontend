import useUser from "./useUser";

const useTeacher = () => {
  const { user } = useUser();
  console.log(user);
};

export default useTeacher;
