import axiosInstance from "./axiosinstance";
import { getToken } from "./getToken";
const bookSlot = async (slotId, date) => {
  const requestData = {
    slotId: slotId,
    date: date
  };
  const token = getToken()
  const headers = {
    authorization: `Bearer ${token}`,
  };
  try {
    const response = await axiosInstance.post(
      "/patient/bookASlot",
      requestData,
      { headers}
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};
export default bookSlot;
