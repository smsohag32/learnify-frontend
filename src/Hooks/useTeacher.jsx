import useUser from "./useUser";

const useTeacher = () => {
  const { user } = useUser();

  //   TODO Verify teacher
  return user;
};

export default useTeacher;
