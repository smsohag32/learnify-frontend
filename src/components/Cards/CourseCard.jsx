const CourseCard = ({ course }) => {
  console.log(course);
  return (
    <div>
      <div>
        <img src={course?.main_course_file} alt="" />
      </div>
      <div>
        <h4>{course?.lesson_name}</h4>
        <div>
          <div></div>
          <button>{course?.price}</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
