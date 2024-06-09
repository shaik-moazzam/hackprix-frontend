import axiosInstance from "./axiosinstance";
import { getToken } from "./getToken";
const updateHabits = async (drinkingHabits,
    exercise,
    eatingSchedule,
    dietPreference,
    smokingHabits) => {
        
    const requestData = {
        smoking: smokingHabits,
        alchohol: drinkingHabits,
        diet: dietPreference,
        no_of_meals: eatingSchedule,
        exercise: exercise
    };
    const token = getToken()
    const headers = {
        authorization: `Bearer ${token}`,
    };
    try {
        const response = await axiosInstance.post(
            "/patient/updateHabits",
            requestData,
            { headers }
        );
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
export default updateHabits;
