import axiosInstance from "./axiosinstance";
const verifyCode = async (email, code) => {
  console.log(typeof otp, "otp");
  const requestData = {
    email: email,
    code: code,
  };
  try {
    const response = await axiosInstance.post(
      "student/verifycode",
      requestData
    );

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
export default verifyCode;
