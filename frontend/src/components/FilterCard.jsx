import React from "react";

const filterData = [
  {
    filterType: "Location",
    array: ["Kathmandu", "Dharan", "Biratnagar", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: [
      "Frontend Development",
      "Backend Development",
      "FullStack Development",
    ],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "40-1 lakh", "1 lakh to 5 lakh"],
  },
];

const FilterCard = () => {
  return (
    <div>
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <div>
        {filterData.map((data, index) => (
          <div key={index}>
            <h1 className="font-bold">{data.filterType}</h1>
            {data.array.map((item, itemIndex) => {
              const radioId = `radio-${index}-${itemIndex}`; // Unique ID for each radio
              return (
                <div key={itemIndex}>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id={radioId} name={`filter-${index}`} className="check" />
                    <label htmlFor={radioId} className="cursor-pointer">
                      {item}
                    </label>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterCard;
