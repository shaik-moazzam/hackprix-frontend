import axiosInstance from "./axiosinstance";
import { getToken } from "./getToken";
const validateOtp = async (phone, otp) => {
  const requestData = {
    phone: phone,
    otp: otp
  };
  const token = getToken()
  const headers = {
    authorization: `Bearer ${token}`,
  };
  try {
    const response = await axiosInstance.post(
      "/patient/verifyOtp",
      requestData,
      { headers}
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};
export default validateOtp;
    