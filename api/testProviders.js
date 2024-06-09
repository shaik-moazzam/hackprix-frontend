import axiosInstance from "./axiosinstance";
const testProviders = async () => {
    try {
        const response = await axiosInstance.get(`/general/testProviders`);

        return response.data;
    } catch (error) {
        console.log(error);
        return { error: error.response.data };
    }
};
export default testProviders;
