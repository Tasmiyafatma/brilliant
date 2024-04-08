import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReportCard = ({ report }) => {
  return (
    <div className="mx-auto mt-6 bg-white shadow-md rounded-lg overflow-hidden">
      {/* Image */}
      <div className="flex justify-start items-center">
        <div className="p-4">
          <FontAwesomeIcon
            icon={faEarthAmericas}
            size="3x"
            className="border-4 border-blue-400 rounded-[50%]"
          />
        </div>
        <h2 className="text-lg font-semibold">Reports</h2>
      </div>

      {/* Description */}
      <div className="flex flex-col justify-center px-4 py-2">
        <p className="text-gray-600">{report}</p>
      </div>
    </div>
  );
};

export default ReportCard;
