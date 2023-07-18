import useCourses from "../../../Hooks/useCourses";
import CourseCard from "../../../components/Cards/CourseCard";
import Spinner from "../../../components/Spinner/Spinner";

const Courses = () => {
  // load data using to custom hooks
  const { coursesData, cLoading } = useCourses();

  if (cLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div>
        <span>TODO: all courses. Total courses {coursesData?.length}</span>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-12">
          {coursesData.map((course) => (
            <CourseCard key={course?.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
