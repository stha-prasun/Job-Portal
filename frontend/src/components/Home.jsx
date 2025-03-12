import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";
import CategoryCarosule from "./CategoryCarosule";
import LatestJobs from "./LatestJobs";
import Footer from "./shared/Footer";
import useGetAllJobs from "../hooks/useGetAllJobs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { loggedInUser } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedInUser?.role === "recruiter") {
      navigate("/admin/companies");
    }
  }, []);

  useGetAllJobs();
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategoryCarosule />
      <LatestJobs />
      <Footer />
    </div>
  );
};

export default Home;
