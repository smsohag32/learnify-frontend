import React from "react";
import useUser from "../../../Hooks/useUsers";

const TeacherDashboard = () => {
  const { user } = useUser();
  console.log(user);
  return <div></div>;
};

export default TeacherDashboard;
