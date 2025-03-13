import { useEffect } from "react";
import { JOB_API_ENDPOINT } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setAllAdminJobs } from "../redux/jobSlice";
import axios from "axios";

const useGetAdminJobs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAdminJobs = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/v1/job/getadminjobs`, {
            withCredentials:true
        });
        if (res.data.success) {
          dispatch(setAllAdminJobs(res.data.jobs));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAdminJobs();
  }, []);
};

export default useGetAdminJobs;
