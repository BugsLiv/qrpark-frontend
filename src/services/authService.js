import axiosInstance from "@/lib/axios";


export const registerUserAPI = async (data) => {
  const response = await axiosInstance.post("auth/register", data);
  return response.data;
};

export const loginUserAPI = async (email) => {

  console.log("Email",email)
  const response = await axiosInstance.post("auth/login", email);
  console.log("Login Responbse",response)
  return response.data;
};
export const verifyOtpAPI = async (data) => {
  const response = await axiosInstance.post("auth/verify-otp", data);
  return response.data;
};