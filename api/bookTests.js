import axiosInstance from "./axiosinstance";
import { getToken } from "./getToken";
import { BACK_KEY } from "./variables";
const bookTests = async (email, password, date, time) => {
    const token = getToken()
    console.log(token)
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
        const response = await axiosInstance.post("/patient/bookTests", { headers }, requestData);

        return response.data;
    } catch (error) {
        console.log(error);
        return { error: error.response.data };
    }
};
export default bookTests;
