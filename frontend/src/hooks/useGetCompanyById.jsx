import { useEffect } from "react";
import { COMPANY_API_ENDPOINT } from "../utils/constants";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setSingleCompany } from "../redux/companySlice";

const useGetCompanyById = (companyID) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchSingleCompany = async () => {
      try {
        const res = await axios.get(
          `${COMPANY_API_ENDPOINT}/get/${companyID}`,
          {
            withCredentials: true,
          }
        );
        if (res.data.success) {
          dispatch(setSingleCompany(res.data.company));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleCompany();
  }, [companyID, dispatch]);
};

export default useGetCompanyById;
