import useUser from "../../../Hooks/useUser";

const TeacherDashboard = () => {
  const { user } = useUser();
  console.log(user);
  return <div></div>;
};

export default TeacherDashboard;
