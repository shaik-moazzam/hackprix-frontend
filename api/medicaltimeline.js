import axiosInstance from "./axiosinstance";
const Gettimeline = async (token) => {
  const headers = {
    authorization: `Bearer ${token}`,
  };
  try {
    const response = await axiosInstance.get("patient/getalltests", {
      headers,
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export default Gettimeline;
