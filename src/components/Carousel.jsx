import { useState } from "react";
import Image1 from "../assets/runner-1.jpg";
import Image2 from "../assets/runner-2.jpg";
import Image3 from "../assets/runner-3.jpg";
import Image4 from "../assets/runner-4.jpg";
import Image5 from "../assets/runner-1.jpg";
import Image6 from "../assets/runner-2.jpg";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [Image1, Image2, Image3, Image4, Image5, Image6];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className=" mt-8 overflow-hidden">
      <div
        className="flex gap-2 transition-transform duration-300 ease-in-out "
        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-[200px] flex-shrink-0 h-[350px]">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>
            <div className="flex justify-between items-center h-24 px-6">
            <button
        onClick={handlePrev}
        className="w-10 h-10 flex items-center justify-center"
      >
       <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <button
        onClick={handleNext}
        className="w-10 h-10 flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
            </div>
    </div>
  );
};

export default Carousel;
