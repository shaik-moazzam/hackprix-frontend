import axiosInstance from "./axiosinstance";
import { BACK_KEY } from "./variables";
const login1 = async (email, password) => {
  const requestData = {
    email: email,
    password: password,
  };
  try {
    const response = await axiosInstance.post("/student/login", requestData);
    localStorage.setItem("token", response.data.token + BACK_KEY);

    return response.data;
  } catch (error) {
    console.log(error);
    return { error: error.response.data };
  }
};
export default login1;
