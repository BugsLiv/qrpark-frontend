import axiosInstance from "@/lib/axios";


export const fetchVehicleAPI = async (data) => {
    console.log("data",data)
  const response = await axiosInstance.get(`vehicles?page=${data?.page}&limit=${data?.limit}`, data);
  return response.data;
};
export const fetchVehicleById = async (id) => {
const response = await axiosInstance.get(`vehicles/${id}`);
return response.data;
};
export const updateVehicleApi = async ({id,data}) => {
  console.log("formData",data)
  const response = await axiosInstance.put(`vehicles/${id}`,data);
  return response.data;
  };
  export const fetchMessagesAPI = async (data) => {
  const response = await axiosInstance.get(`/messages/my-messages?page=${data?.page}&limit=${data?.limit}`);
  return response.data;
};