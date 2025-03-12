import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { FaArrowLeft } from "react-icons/fa";

const CompanySetup = () => {
  const [input, setinput] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: null,
  });

  const handleForm = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    setinput({ ...input, file });
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(input);
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-xl mx-auto my-10">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center gap-5 p-8">
            <button className="btn text-gray-500 font-semibold">
              <FaArrowLeft />
              Back
            </button>
            <h1 className="font-bold text-xl">Company Setup</h1>
          </div>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Company Name</legend>
            <input
              value={input.name}
              onChange={handleForm}
              type="text"
              className="input"
              name="name"
              placeholder="Type here"
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Description</legend>
            <input
              value={input.description}
              onChange={handleForm}
              type="text"
              className="input"
              name="description"
              placeholder="Type here"
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Website</legend>
            <input
              value={input.website}
              onChange={handleForm}
              type="text"
              className="input"
              name="website"
              placeholder="Type here"
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Location</legend>
            <input
              value={input.location}
              onChange={handleForm}
              type="text"
              className="input"
              name="location"
              placeholder="Type here"
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Logo</legend>
            <input
              onChange={handleFile}
              type="file"
              className="input"
              accept="image/*"
              placeholder="Type here"
            />
          </fieldset>
          <button type="submit" className="btn btn-outline btn-warning mt-3">Update</button>
        </form>
      </div>
    </div>
  );
};

export default CompanySetup;
