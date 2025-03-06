import React from "react";

const CategoryCarosule = () => {
  const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "Full Stack Developer",
  ];

  return (
    <div className="my-10">
      <div className="carousel carousel-center space-x-4 flex justify-center items-center md:space-x-6 lg:space-x-8">
        {
          category.map((cat, index) => (
            <div key={index} className="carousel-item">
              <button className="btn btn-neutral px-6 py-3 rounded-md shadow-lg">
                {cat}
              </button>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default CategoryCarosule;
