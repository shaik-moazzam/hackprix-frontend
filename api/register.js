import axiosInstance from "./axiosinstance";
import { BACK_KEY } from "./variables";
const Register = async (email, password,name) => {
    let requestData
    if(name){

        requestData = {
           email: email,
           password: password,
           name:name
       };
    }
    else{
        requestData = {
            email: email,
            password: password,
           
        };
    }
    try {
        const response = await axiosInstance.post('/student/register', requestData);
        localStorage.setItem("token", response.data.token + BACK_KEY);
    //   console.log(response, "response");
        return response.data;
    } catch (error) {
        //////console.log(error);
        return { error: error.response.data.error };
    }
};
export default Register;