import axiosInstance from "./axiosinstance";
import { getToken } from "./getToken";
const getDoctorSchedule = async (id) => {
    const token = getToken();
  const headers = {
    authorization: `Bearer ${token}`,
  };
  try {
    const response = await axiosInstance.get(`patient/doctorSchedule/${id}`, {
      headers,
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};
export default getDoctorSchedule;
