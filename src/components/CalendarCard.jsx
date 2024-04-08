import React from "react";

const CalendarCard = () => {
  // Get current date
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentYear = currentDate.getFullYear();
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  // Generate an array of days in the current month
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Get today's date
  const today = currentDate.getDate();

  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <div className="text-lg font-semibold mb-4">
        {currentMonth} {currentYear}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {/* using map displaying the date data of 30 days */}
        {daysArray.map((day) => (
          <div
            key={day}
            className={`text-center py-2 rounded ${
              today === day ? "border border-yellow-500" : ""
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarCard;
