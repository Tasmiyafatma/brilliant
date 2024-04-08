import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import CalendarCard from "./CalendarCard";
import CourseCard from "./CourseCard";
import RaceCard from "./RaceCard";

const Today = () => {
  return (
    <div className="grid max-[639px]:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 max-[639px]:gap-0 xs:gap-0 sm:gap-0 md:gap-0">
      <div className="p-4">
        <div className="flex gap-2 justify-start items-center hover:cursor-pointer">
          <FontAwesomeIcon color="grey" icon={faAngleLeft} />
          <p className="text-gray-400 hover:text-black">Back</p>
        </div>
        <div className="mt-10">
          <CalendarCard />
        </div>
        <div className="mt-10">
            <CourseCard />
        </div>
      </div>
      <div className="col-span-2 p-4">
        <RaceCard />
      </div>
    </div>
  );
};

export default Today;
