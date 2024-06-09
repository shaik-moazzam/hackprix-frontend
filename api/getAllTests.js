import axiosInstance from "./axiosinstance";
const getAllTests = async (token) => {
  const headers = {
    authorization: `Bearer ${token}`,
  };
  try {
    const response = await axiosInstance.get("patient/getAllTests", {
      headers,
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export default getAllTests;
