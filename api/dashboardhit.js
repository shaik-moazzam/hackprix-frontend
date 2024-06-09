import axiosInstance from "./axiosinstance";
const GetDAshData = async (token) => {
  const headers = {
    authorization: `Bearer ${token}`,
  };
  try {
    const response = await axiosInstance.get("patient/dashboardHit", {
      headers,
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export default GetDAshData;
