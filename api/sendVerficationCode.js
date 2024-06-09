import axiosInstance from "./axiosinstance";
const sendVerificationCode = async (email) => {
  const requestData = {
    email: email,
  };
  try {
    const response = await axiosInstance.post(
      "/patient/sendVerification",
      requestData
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
export default sendVerificationCode;
