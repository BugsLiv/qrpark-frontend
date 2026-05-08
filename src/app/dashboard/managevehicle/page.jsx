"use client"
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useState } from "react";
import ConfirmationModal from "@/components/Common/ConfirmationModal";
import { useRouter, useSearchParams } from "next/navigation";
import { fetchVehicleById } from "@/services/vehicleServices";
import moment from "moment";

export default function ManageVehiclePage() {
      const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [vehicle,setVehicle]=useState(null)
  const router=useRouter()
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
    const handleSave = async () => {
    setSaving(true);
    setSaving(false);
    setOpen(false);
  };
  return (
    <div className="w-full p-4">
      <h1 className="text-2xl text-primary font-bold">Manage Vehicle</h1>
<div className="flex w-full gap-6 p-4 shadow-soft mt-4">
   
    <div className="w-1/2 flex flex-col gap-2">
<div className="flex gap-2 justify-between items-end">
    <h1 className="text-2xl text-primary">{vehicle?.registrationNumber}</h1>
    <div className="flex gap-2">
    <button onClick={()=>{
        router.push(`/dashboard/add-vehicle?id=${id}`)
    }} className="border cursor-pointer hover:bg-buttonbg hover:text-white border-primary px-2">Edit</button>
    <button className="border border-primary px-2">Don't Know</button>

    </div>
</div>
<hr className="w-full mt-2" />
<div className="flex flex-col gap-2">
    <div className="flex gap-2 items-center">
        <h2 className="text-md text-primary font-bold">Year:</h2>
        <h4 className="text-sm text-primary ">{vehicle?.year}</h4>
    </div>
    <div className="flex gap-2 items-center">
        <h2 className="text-md text-primary font-bold">Vehicle Make:</h2>
        <h4 className="text-sm text-primary ">{vehicle?.vehicleMake}</h4>
    </div>
    <div className="flex gap-2 items-center">
        <h2 className="text-md text-primary font-bold">Maristas Modal:</h2>
        <h4 className="text-sm text-primary ">{vehicle?.model}</h4>
    </div>
    <div className="flex gap-2 items-center">
        <h2 className="text-md text-primary font-bold">Vehicle Color:</h2>
        <h4 className="text-sm text-primary ">{vehicle?.vehicleColor}</h4>
    </div>
</div>
<div className="flex gap-2 justify-between ">
<div className="flex flex-col gap-2">
<div className="flex flex-col gap-2 ">
<h4 className="text-sm text-primary ">Register For</h4>

        <h2 className="text-md text-primary font-bold">{moment(vehicle?.createdAt).format("DD MMM YYYY")}</h2>
    </div> 
    <div className="flex flex-col gap-2 ">
<h4 className="text-sm text-primary ">Register Owner</h4>

        <h2 className="text-md text-primary font-bold">{vehicle?.owner?.name}</h2>
    </div> 
</div>
<div>
    <Image src={"/car.jpeg"} width={200} height={200} alt="Car" />
</div>
</div>
<div className="border border-primary bg-primary-side p-2 px-6 flex gap-1 justify-between">
    <div onClick={() => setOpen(true)}  className="flex cursor-pointer gap-2 items-center">
        <FaCloudDownloadAlt size={24} className="text-primary"/>
        <h3 className="text-primary text-lg">Download QR Code</h3>

    </div>
    <div className="flex cursor-pointer gap-2 items-center">
        <RiDeleteBin5Line size={24} className="text-bgred"/>
        <h3 className="text-bgred text-lg">Delete QR Code</h3>

    </div>

</div>
    </div>


    <div className="p-4 shadow-soft w-1/2 flex justify-center">
        <Image src={"/downloadqr.png"} width={300} height={300} alt="downloadqr" />

    </div>
</div>

      <ConfirmationModal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Change Vehicle Details"
        description={
          <>
            <p>Are you sure you want to disable the QR Park tag associated with this vehicle?</p>
            <p className="mt-3">The QR code will no longer allow anyone in the app to contact you.</p>
          </>
        }
        confirmButton={{
          label: 'Save Change',
          variant: 'primary',
          onClick: handleSave,
          loading: saving,
        }}
        cancelLabel="Cancel"
      />

    </div>

  );
}