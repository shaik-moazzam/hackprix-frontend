import axiosInstance from "./axiosinstance";
import { getToken } from "./getToken";
const bookTests = async (email, password, date, time) => {
    const token = getToken()
    const headers = {
        authorization: `Bearer ${token}`,
    };
    const requestData = {
        tests: [email],
        testProviderId: password,
        date: date,
        time: time
    };
    try {
        const response = await axiosInstance.post("/patient/bookTests", requestData, { headers });

        return response.data;
    } catch (error) {
        console.log(error);
        return { error: error.response.data };
    }
};
export default bookTests;
