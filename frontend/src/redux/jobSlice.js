import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    allJobs: [],
    singleJob: null,
    allAdminJobs:[],
    searchJobByText : "",
    appliedJobs : [],
  },
  reducers: {
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
    },
    setSingleJob: (state, action) => {
      state.singleJob = action.payload;
    },
    setAllAdminJobs: (state, action) => {
      state.allAdminJobs = action.payload;
    },
    setSerchJobByText: (state, action) => {
      state.searchJobByText = action.payload;
    },
    setAppliedJobs: (state, action) => {
      state.appliedJobs = action.payload;
    },
  },
});

export const { setAllJobs, setSingleJob, setAllAdminJobs, setSerchJobByText, setAppliedJobs } = jobSlice.actions;
export default jobSlice.reducer;
