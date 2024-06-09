import axiosInstance from "./axiosinstance";
import { getToken } from "./getToken";
const sendOtp = async (phone) => {
  const requestData = {
    phone: phone
  };
  const token = getToken()
  const headers = {
    authorization: `Bearer ${token}`,
  };
  try {
    const response = await axiosInstance.post(
      "/patient/sendOtp",
      requestData,
      { headers}
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};
export default sendOtp;
