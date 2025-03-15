import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { APPLICATION_API_ENDPOINT } from '../utils/constants';
import { setAppliedJobs } from '../redux/jobSlice';

const useGetAppliedJobs = () => {
    const dispatch = useDispatch();

  useEffect(() => {
    const fetchAppliedJobs = async () =>{
        try {
          const res = await axios.get(`${APPLICATION_API_ENDPOINT}/get`, {withCredentials:true});
          if(res.data.success){
            dispatch(setAppliedJobs(res.data.application));
          }  
        } catch (error) {
            console.log(error);
        }
    }
    fetchAppliedJobs();
  }, [])
  
}

export default useGetAppliedJobs
