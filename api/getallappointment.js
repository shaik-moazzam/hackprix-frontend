import axiosInstance from "./axiosinstance";
const Getallappointment = async (token) => {
  const headers = {
    authorization: `Bearer ${token}`,
  };
  try {
    const response = await axiosInstance.get("patient/getAllAppointments", {
      headers,
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export default Getallappointment;
