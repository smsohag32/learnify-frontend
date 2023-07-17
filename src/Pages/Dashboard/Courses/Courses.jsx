import useCourses from "../../../Hooks/useCourses";
import Spinner from "../../../components/Spinner/Spinner";

const Courses = () => {
  // load data using to custom hooks
  const { coursesData, cLoading } = useCourses();
  console.log(coursesData);
  if (cLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div>
        <span>TODO: all courses. Total courses {coursesData?.length}</span>
      </div>
    </div>
  );
};

export default Courses;
