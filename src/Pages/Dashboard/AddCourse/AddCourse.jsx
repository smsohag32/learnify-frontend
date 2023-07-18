const AddCourse = () => {
  const handleAddCourse = () => {};
  // TODO:
  return (
    <div>
      <div>
        <p className="font-semibold text-lg">Add New Course</p>
        <span>heading Link</span>
      </div>
      <div className="bg-white p-6">
        <form
          onSubmit={handleAddCourse}
          className="flex flex-col md:flex-row gap-4"
        >
          <div className="w-full">
            <h1>File Upload</h1>
          </div>
          <div className="w-full">
            <h1>Other Information</h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
