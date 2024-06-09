import axiosInstance from "./axiosinstance";
import { getToken } from "./getToken";
const joinMeeting = async (slotId) => {
  const requestData = {
    slotId: slotId,
  };
  const token = getToken();
  const headers = {
    authorization: `Bearer ${token}`,
  };
  try {
    const response = await axiosInstance.post(
      "patient/joinMeet",
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
export default joinMeeting;
