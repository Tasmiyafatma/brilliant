import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import raceImg1 from "../assets/race-img-1.jpg";
import runner1 from "../assets/runner-1.jpg";
import runner2 from "../assets/runner-2.jpg";
import runner3 from "../assets/runner-3.jpg";
import runner4 from "../assets/runner-4.jpg";
import Carousel from "./Carousel";
import { faGripfire } from "@fortawesome/free-brands-svg-icons";
import ReportCard from "./ReportCard";
import { reportData } from "../utils/constants";

const RaceCard = () => {
  return (
    <>
      <div className="bg-white shadow-md px-24 py-10 rounded-md max-[740px]:px-2">
        <p className="text-gray-600 uppercase">Math and Logic </p>
        <p className="text-balck-500">Series 1 of 3</p>
        <h1 className="text-black-800 text-3xl font-semibold">
          Who Won the Race?
        </h1>
        <p className="mt-4 text-lg space-x-3 text-gray-700">
          How much information do you need to find the finish order of a three
          person race? It turns out,{" "}
          <span className="font-semibold">not much all</span>.
        </p>
        <div className="p-4 mt-6">
          <img src={raceImg1} alt="image-1" />
        </div>
        <p className="text-gray-700 mt-6">
          Suppose that in a race among Amelia, Boris, and Carlos, we only know
          one fact - that Boris finished before Carlos. What are the possible
          orders for the entire race? Keep reading to see some reasoning we can
          use, or jump ahead to today&apos;s challenge for a tricker problem.
        </p>
        <p className="text-gray-700 mt-6">
          We can start by thinking about a single unknown factor in the problem:
          &quot;Where did Amelia finish?&quot; To see this logic demonstrated,
          use the arrows below the figure:
        </p>
        {/* First card of logic demonsatartions */}
        <div className="border-2 border-gray-200 rounded-md p-3">
          <div className="flex gap-3 justify-between items-start max-[930px]:flex-col max-[930px]:items-center">
            <div className="flex-1 border-2 border-green-400 rounded-lg p-3">
              <p className="text-center font-semibold">Carlos</p>
              <div className="w-full h-[300px]">
                <img
                  src={runner1}
                  alt="runner-1"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 border-2 border-green-400 rounded-lg p-3">
              <p className="text-center font-semibold">Amelia</p>
              <div className="w-full h-[300px]">
                <img
                  src={runner2}
                  alt="runner-2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 border-2 border-green-400 rounded-lg p-3">
              <p className="text-center font-semibold">Boris</p>
              <div className="w-full h-[300px]">
                <img
                  src={runner3}
                  alt="runner-3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Carousel */}
          <Carousel />

          <p className="text-black-800 font-semibold mt-6">
            If Amelia finished second, there is still a way for Boris to finish
            ahead of Carlos. This order is different from the first, so we have
            another solution.
          </p>
        </div>
        <p className="text-gray-700 mt-6">
          Since we know the relationship between Boris and Carlos, Amelia&apos;s
          position in the race completely determined the entire finishing order.
          There are three possible total finishing orders - one for each of the
          poitions in which Amelia can finsih.
        </p>
        <p className="text-gray-700 mt-6">
          What if we add another runner to the race, Dara, and have a more
          complicated secenario?
        </p>
        <div className="w-[60%] border-2 border-gray-200 p-4 bg-gray-50 mx-auto my-6">
          <p>
            Dara finished more places ahead of Amelia than Boris finished before
            Carlos.
          </p>
        </div>
        <p className="text-gray-700 mt-6">
          We can start by again thinking about an unknown - &quot;How did Boris
          and Carlos finish?&quot;
        </p>
        <div className="border-2 border-gray-200 rounded-md p-4 mt-6">
          <div className="flex justify-between items-start gap-3 ">
            <div className="flex-1 flex justify-center items-center border-2 border-gray-400 border-dotted h-[200px] rounded-lg">
              <p className="text-gray-400 font-medium">Fourth</p>
            </div>
            <div className="flex-1 flex justify-center items-center border-2 border-gray-400 border-dotted h-[200px] rounded-lg">
              <p className="text-gray-400 font-medium">Third</p>
            </div>
            <div className="flex-1 flex justify-center items-center border-2 border-gray-400 border-dotted h-[200px] rounded-lg">
              <p className="text-gray-400 font-medium">Second</p>
            </div>
            <div className="flex-1 flex justify-center items-center border-2 border-gray-400 border-dotted h-[200px] rounded-lg">
              <p className="text-gray-400 font-medium">First</p>
            </div>
          </div>
          <div className="flex justify-between items-start gap-3 mt-6 max-[930px]:flex-col max-[930px]:items-center max-[930px]:gap-0">
            <div className="flex-1 p-3">
              <p className="text-center font-semibold">Amelia</p>
              <div className="w-full h-[240px] p-2">
                <img
                  src={runner2}
                  alt="runner-2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 p-3">
              <p className="text-center font-semibold">Boris</p>
              <div className="w-full h-[240px] p-2">
                <img
                  src={runner3}
                  alt="runner-3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 p-3">
              <p className="text-center font-semibold">Carlos</p>
              <div className="w-full h-[240px] p-2">
                <img
                  src={runner1}
                  alt="runner-1"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 p-3">
              <p className="text-center font-semibold">Dara</p>
              <div className="w-full h-[240px] p-2">
                <img
                  src={runner4}
                  alt="runner-4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <p className="text-black-800 font-semibold mt-10">
            Use the arrows to view the solution step by step.
          </p>
        </div>
        <p className="text-gray-700 mt-6">
          There is only oen way these conditions can be satisfied without
          conflicts, so we have only solution.
        </p>
        <p className="text-gray-700 mt-6">
          In the problem below, you&apos;ll be putting together information liek
          this, but with five runners instead of four. Can you use logic to
          figure out the order?
        </p>

        {/* Today's Chalenge */}
        <h3 className="text-center font-bold text-3xl my-6">
          Today&apos;s Challenge
        </h3>
        <hr />
        <p className="text-gray-700 mt-6">
          Four runners compete in a race - Amelia, Boris, Carlos, and Dara.
        </p>
        <p className="text-gray-700 mt-6">
          After some confusion at the finish line, it&apos;s unclear what the
          final finishing order was, but this information is knows:
        </p>
        <div className="w-[60%] border-2 border-gray-200 p-4 bg-gray-50 mx-auto my-6">
          <ol className="list-decimal p-4">
            <li>Dara finished before Amelia.</li>
            <li>Boris wasn&apos;t third.</li>
            <li>There were two runners between Amelia and Carlos.</li>
          </ol>
        </div>
        <p className="text-gray-700 mt-6">Who won the race?</p>
        <div className="flex justify-between items-start gap-3 mt-6">
          <div className="flex-1 rounded-md border-2 border-blue-600 p-2">
            <p className="text-center font-semibold">Amelia</p>
            <div className="w-full h-[210px]">
              <img
                src={runner2}
                alt="runner-2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1 rounded-md flex justify-center items-center h-[250px] border-2 border-gray-600 border-dashed">
            <p className="text-gray-400 font-medium">Third</p>
          </div>
          <div className="flex-1 rounded-md border-2 border-blue-600 p-2">
            <p className="text-center font-semibold">Carlos</p>
            <div className="w-full h-[210px] p-2">
              <img
                src={runner1}
                alt="runner-1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1 rounded-md flex justify-center items-center h-[250px] border-2 border-gray-600 border-dashed">
            <p className="text-gray-400 font-medium">First</p>
          </div>
        </div>
        <div className="mt-10 flex justify-startn items-center gap-3">
          <p className="text-black-800 font-semibold">Difficulty:</p>
          <FontAwesomeIcon icon={faGripfire} size="2x" color="orange" />
          <FontAwesomeIcon icon={faGripfire} size="2x" color="gray" />
          <FontAwesomeIcon icon={faGripfire} size="2x" color="gray" />
          <FontAwesomeIcon icon={faGripfire} size="2x" color="gray" />
          <FontAwesomeIcon icon={faGripfire} size="2x" color="gray" />
        </div>
        <div className="px-10 py-6">
          <p className="text-gray-400 px-3 py-2">Amelia</p>
          <p className="text-gray-400 px-3 py-2">Boris</p>
          <p className="text-gray-400 px-3 py-2 border-2 border-yellow-200 rounded-3xl">
            Carlos
          </p>
          <p className="text-gray-400 px-3 py-2">Dara</p>
          <p className="text-gray-400 px-3 py-2">
            There&apos;s not enough information to determine <br /> who won.
          </p>
        </div>
        <p className="text-gray-500 text-center mt-6">View explanation</p>
      </div>
      <div className="bg-gray-100 px-2 py-4">
        <p className="font-bold text-2xl">You viewed the explanation</p>
      </div>

      {/* Report cards start here */}
      <div className="px-10 py-8">
        <p className="text-black-800 font-bold text-xl">Reports</p>
        {/* Form constant data of report card using map we are displaying */}
        {reportData.map((item) => (
          <ReportCard report={item.report} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default RaceCard;
