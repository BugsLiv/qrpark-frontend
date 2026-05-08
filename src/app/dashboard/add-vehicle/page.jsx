"use client"

import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import Select from 'react-select';
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "@/lib/axios";
import { fetchVehicleById, updateVehicleApi } from "@/services/vehicleServices";
import { toast } from "react-toastify";
import Loading from "@/app/loading";

export default function AddVehiclePage() {
  const router = useRouter();
  const [selectedMakeOption, setSelectedMakeOption] = useState(null);
  const [selectedModalOption, setSelectedModalOption] = useState(null);
  const [loading,setLoading]=useState(false)
  const [vehicle,setVehicle]=useState(null)
  console.log("vehicle",vehicle)
  const [formData, setFormData] = useState({
    registrationNumber: "",
    model: "",
    vehicleMake: "",
    vehicleType: "",
    vehicleColor: "",
    year: "",
    licensePlate: "",
    qrToken: "",


  });
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const getVehicleById=async()=>{
  const response=await fetchVehicleById(id)
  if(response?.success){
      setVehicle(response?.data)
  }else{
      alert("Something went Wrong")
  }
  console.log("response",response)
    }
    useEffect(()=>{
      if(id){
        getVehicleById()
      }
    },[id])
    useEffect(()=>{
      if(vehicle){
        setSelectedMakeOption(vehicle?.vehicleMake?{ value: vehicle?.vehicleMake, label: vehicle?.vehicleMake } :null)
        setSelectedModalOption(vehicle?.model?{ value: vehicle?.model, label: vehicle?.model } :null)
        setFormData({
          registrationNumber: vehicle?.registrationNumber?vehicle?.registrationNumber:"",
          model: vehicle?.model?vehicle?.model:"",
          vehicleMake: vehicle?.vehicleMake?vehicle?.vehicleMake:"",
          vehicleType: vehicle?.vehicleType?vehicle?.vehicleType:"",
          vehicleColor: vehicle?.vehicleColor?vehicle?.vehicleColor:"",
          year: vehicle?.year?vehicle?.year:"",
          licensePlate: vehicle?.licensePlate?vehicle?.licensePlate:"",
          qrToken: vehicle?.qrToken?vehicle?.qrToken:"",
        });
      }
    },[vehicle])

// console.log("formData",formData)
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleMakeChange = (selectedOption) => {
    setSelectedMakeOption(selectedOption);
    setFormData(prev => ({
      ...prev,
      vehicleMake: selectedOption?.value || ""
    }));
  };
  
  const handleModelChange = (selectedOption) => {
    setSelectedModalOption(selectedOption);
    setFormData(prev => ({
      ...prev,
      model: selectedOption?.value || ""
    }));
  };

  const makeOptions = [
    { value: 'Toyota', label: 'Toyota' },
    { value: 'Honda', label: 'Honda' },
    { value: 'Suzuki', label: 'Suzuki' },
  ];
  const ModalOptions = [
    { value: 'Toyota Corolla', label: 'Toyota Corolla' },
    { value: 'Toyota Yaris', label: 'Toyota Yaris' },
    { value: 'Honda City', label: 'Honda City' },
    { value: 'Honda Civic', label: 'Honda Civic' },

  ];
  const handleSubmit =async(e)=>{

    try {
      setLoading(true);
    
  if(id){
   const response2 = await updateVehicleApi({id:id,data:formData});
   if(response2?.success){
    toast.success(response2?.message);
   }else{
    toast.error(response2?.message || "Something went wrong");
   }

  }else{
    const response = await axiosInstance.post("vehicles", formData);
     if (response?.data?.success) {
   toast.success(response?.data?.message);
       setFormData({
         registrationNumber: "",
         model: "",
         vehicleMake: "",
         vehicleType: "",
         vehicleColor: "",
         year: "",
         licensePlate: "",
         qrToken: "",
       })
       setSelectedMakeOption(null);
       setSelectedModalOption(null)
     }
  }
 
    } catch (err) {
      toast.error( err?.response?.data?.message ||
        "Something went wrong");
      console.log(err);
    } finally {
      setLoading(false);
    }


  }
  return (
    <>
    {
      loading && <Loading/>
    }
    <div className="p-4">
      <h1 className="text-2xl text-primary font-bold">{id?"Update":"Add New"} Vehicle</h1>
      <p className="text-primary mt-2">Register your car to reccive, y eu unique OR Park sticker.</p>
      <div className="flex gap-8 w-full mt-5">
        <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6 w-full">
           <div className="flex flex-col gap-6">
          <div>
            <label className="block text-md font-medium text-gray-700 mb-1">Register Your Number</label>
             <input
              type="text"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleChange}
              placeholder="e.g., Honda Civic 2022"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
            />
          </div>
          <div>
            <label className="block text-md font-medium text-gray-700 mb-1">Vehicle Make</label>
            <Select
        value={selectedMakeOption}
        onChange={handleMakeChange}
        options={makeOptions}
      />
       
          </div>
          <div>
            <label className="block text-md font-medium text-gray-700 mb-1">Vehicle Model</label>
            <Select
        value={selectedModalOption}
        onChange={handleModelChange}
        options={ModalOptions}
      />
          </div>
          <div>
            <label className="block text-md font-medium text-gray-700 mb-1">Vehicle Type</label>
             <input
              type="text"
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              placeholder="e.g., Car , Truck etc"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
            />
          </div>
          <div>
            <label className="block text-md font-medium text-gray-700 mb-1">Vehicle Color</label>
             <input
              type="text"
              name="vehicleColor"
              value={formData.vehicleColor}
              onChange={handleChange}
              placeholder="e.g., Car , Truck etc"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
            />
          </div>
          <div>
            <label className="block text-md font-medium text-gray-700 mb-1">Year</label>
             <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleChange}
              placeholder="e.g., Car , Truck etc"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
            />
          </div>
          <div>
            <label className="block text-md font-medium text-gray-700 mb-1">License Plate</label>
             <input
              type="text"
              name="licensePlate"
              value={formData.licensePlate}
              onChange={handleChange}
              placeholder="e.g., Car , Truck etc"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
            />
          </div>
          <div>
            <label className="block text-md font-medium text-gray-700 mb-1">QR Token</label>
             <input
              type="text"
              name="qrToken"
              value={formData.qrToken}
              onChange={handleChange}
              placeholder="e.g., Car , Truck etc"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
            />
          </div>
          <button 
          disabled={loading}
          type="button" onClick={handleSubmit} className=" bg-buttonbg hover:bg-buttonbg/90 text-white font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2">
            {loading ? "Creating..." :id?"Update Vehicle": "Save Vehicle"}
             
          </button>
        </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
      <Image
                  src={"/addvehicleqr.png"}
                  width={350}
                  height={350}
                  alt={"addvehicleqr"}
                  className=""
                />
                <div className="items-center text-center">
                <h1 className="text-xl text-primary font-bold">
                Print it sean it,
                
                </h1>
                <h1 className="text-xl text-primary font-bold">
   
                park smart:
                </h1>
                </div>
                <div className="flex items-start  gap-2">
                <HiArrowTopRightOnSquare  size={25} className="text-primary" />
                <p className="text-primary">Whore veebie to lay elur ut and aniaoin anen.</p>

                </div>

        </div>

      </div>

    </div>
    </>
  );
}