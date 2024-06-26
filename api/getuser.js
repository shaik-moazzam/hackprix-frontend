import axiosInstance from "./axiosinstance";
const getuser = async (token) => {
  const headers = {
    authorization: `Bearer ${token}`,
  };
  try {
    const response = await axiosInstance.get("/patient/get", {
      headers,
    });

    return response.data;
  } catch (error) {
    console.log(error);
    localStorage.removeItem("token");
    window.location.href = "/login";
    return null;
  }
};
export default getuser;
