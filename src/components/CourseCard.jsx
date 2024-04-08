const CourseCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-4">
        <div className="flex">
                  {/* Left side */}
      <div className="flex flex-col justify-between w-1/2">
        <div>
          <div className="text-xs text-gray-600 uppercase mb-2">
            Featured Course
          </div>
          <h3 className="text-lg font-semibold mb-2">Logic</h3>
          <p className="text-lg text-gray-500 mb-4">
            Stretch your analytic, muscles with truth-tellers, liars, logical robots, and more!
          </p>
        </div>

      </div>
      {/* Right side (background image) */}
      <div  className="w-2/3 bg-cover bg-center p-4">
        <img src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic-HzWHci.png" alt="analytics-image" />
      </div>
        </div>
      <button className="border-2 border-black-200 text-black-600 py-2 px-4 rounded w-full hover:bg-black-600">
          Visit Course
        </button>
    </div>
  );
};

export default CourseCard;
