import axiosInstance from "./axiosinstance";
import { getToken } from "./getToken";
const updatePatient = async (object1) => {
  const token = getToken()
  const headers = {
    authorization: `Bearer ${token}`,
  };
  try {
    const response = await axiosInstance.post(
      "/patient/update",
      object1,
      {headers}
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
export default updatePatient;
