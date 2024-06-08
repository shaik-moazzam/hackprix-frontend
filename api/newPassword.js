import axiosInstance from "./axiosinstance";
import { getToken } from "./getToken";
const newPassword = async (password) => {
  const requestData = {
    password: password,
  };
  const token = getToken();
  const headers = {
    authorization: `Bearer ${token}`,
  };
  try {
    const response = await axiosInstance.post(
      "/student/newpassword",
      requestData,
      {
        headers,
      }
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
export default newPassword;
