
"use client";

import { MdContactMail } from "react-icons/md";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { LuLayoutDashboard } from "react-icons/lu";
import { LuTruck } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchVehicles } from "@/store/slices/vehicleSlice";

const vehicles = [
  { id: 1, image:"/car.jpeg", name: "Civic", plate: "ABC-1234", status: "Do not enter" },
  { id: 2, image:"/car.jpeg", name: "DEF-5678", plate: "DEF-5678", status: "Do not enter" },
];
const Tabs = [
  { name: "Dashboard", href: "/dashboard", icon: LuLayoutDashboard },
  { name: "Add Vehicle", href: "/dashboard/add-vehicle", icon: LuTruck },
  { name: "Account Settings", href: "/dashboard/account-settings", icon: IoMdSettings },
];
export default function DashboardPage() {
  const dispatch = useDispatch();

  const { loading, error, vehicles } = useSelector((state) => state.vehicle);
  const [page, setPage] = useState(1);
const limit = 5;
    const pathname = usePathname();
    const router =useRouter()
    useEffect(()=>{
dispatch(fetchVehicles({ page, limit }))
    },[dispatch, page])
    console.log("loading, error, vehicles",loading, error, vehicles)
  
  return (
    <>
    <div className="py-4 px-4 ">

 <div className="flex  mt-4 mb-4 border-y gap-4 border-slate-300">
  
 {Tabs.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 hover:bg-primary  transition ${
                  active
                    ? "bg-primary text-white font-semibold"
                    : "text-primary hover:bg-primary hover:text-white"
                }`}
              >
                <item.icon size={20} />
                <span>{item.name}</span>

              </Link>
            );
          })}
 </div>
      {/* Banner */}
      <div className="bg-primary rounded-lg p-6 ">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className=" items-center ">
          
            <div className="flex gap-2  items-center">
              <MdContactMail className="w-6 h-6 text-white" />
           
              <h2 className="text-xl  text-white">
                Don't forget to print and attach your QR Park sticker!
              </h2>
          
            </div>
            <p className="text-white text-sm">
                Make sure your contact tag is visible on your car windshield or bumper.
              </p>
          </div>
          <Image src={"/scancontact.png"} width={100} height={100} alt="image" />
          {/* <button className="bg-buttonbg hover:bg-buttonbg/90 text-white px-5 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
            Print Sticker
          </button> */}
        </div>
      </div>
      <div className="mt-8 flex items-center gap-3">
          <p className="text-xl font-bold text-primary">Your Vehicles</p>
          <MdContactMail className="text-primary" />

        </div>
      <div className="flex flex-col border border-slate-300 mt-2 shadow-soft">
    
{
  vehicles?.data?.map((vehicle)=>{
    return(
      <div key={vehicle.id} className="flex justify-between border-b border-slate-300 p-4">
        <div className="flex items-center gap-4">
          <Image src={"/car.jpeg"} width={100} height={100} alt="Car"/>
          <p className="font-bold text-primary">{vehicle?.vehicleMake}</p>
          <div className="border border-primary px-2">
            <p className="text-primary text-xs">{vehicle?.licensePlate}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
          <button 
          onClick={()=>{
            router.push(`/dashboard/managevehicle?id=${vehicle._id}`)
          }}
          className="rounded-sm cursor-pointer text-white bg-primary px-6 py-2  hover:bg-teal-600">
            View QR Code
          </button>
          <button onClick={()=>{
            router.push(`/dashboard/managevehicle?id=${vehicle._id}`)
          }} className="rounded-sm cursor-pointer flex gap-2 items-center text-white bg-buttonbg px-6 py-2  hover:bg-teal-600">
            Manage
            <IoIosArrowDown className="text-white "/>

          </button>
          </div>
        </div>
    )
  })
}
      </div>
      <div className="flex items-center justify-between mt-6">
  <button
    disabled={page === 1}
    onClick={() => setPage((prev) => prev - 1)}
    className="px-4 py-2 bg-buttonbg rounded disabled:opacity-50 text-white"
  >
    Previous
  </button>

  <span className="text-primary font-bold">
    Page {page}
  </span>

  <button
    disabled={vehicles?.meta?.totalPages === page}
    onClick={() => setPage((prev) => prev + 1)}
    className="px-4 py-2 bg-buttonbg rounded disabled:opacity-50 text-white"
  >
    Next
  </button>
</div>
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 flex gap-4 items-center rounded-sm p-4 mt-4 ">
            <MdContactMail className="text-amber-600 " size={28} />
           <div>
            <span className="font-bold text-gray-800">TROUBLE PRINTING YOUR STICKERS? </span>Contact us and we can print and deliver your QR Park tags directly.
          
            </div>
          </div>
    </div>
    </>
  );
}