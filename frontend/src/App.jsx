import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import JobDescription from "./components/JobDescription";
import Companies from "./components/admin/Companies";
import CompanyCreate from "./components/CompanyCreate";
import CompanySetup from "./components/CompanySetup";
import AdminJobs from "./components/admin/AdminJobs";
import PostJobs from "./components/admin/PostJobs";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/description/:id",
    element: <JobDescription />,
  },

  //admin(recruiter) routes
  {
    path: "/admin/companies",
    element: <Companies />,
  },
  {
    path: "/admin/companies/create",
    element: <CompanyCreate />,
  },
  {
    path: "/admin/companies/:id",
    element: <CompanySetup />,
  },
  {
    path: "/admin/jobs",
    element: <AdminJobs />,
  },
  {
    path: "/admin/jobs/create",
    element: <PostJobs />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default App;
