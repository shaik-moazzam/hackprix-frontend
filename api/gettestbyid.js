import axiosInstance from "./axiosinstance";
import { getToken } from "./getToken";
const getTestById = async (id) => {
    const token = getToken()
    const headers = {
        authorization: `Bearer ${token}`,
    };
    try {
        const response = await axiosInstance.get(`/patient/getTestById/${id}`, {
            headers,
        });

        return response.data;
    } catch (error) {
        console.log(error);
        return { error: error.response.data };
    }
};
export default getTestById;
