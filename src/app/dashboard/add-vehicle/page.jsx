
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

import Image from "next/image";
import Dropdown from "@/components/Common/Dropdown";

export default function AddVehiclePage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl text-primary font-bold">Add New Vehicle</h1>
      <p className="text-primary mt-2">Register your car to reccive, y eu unique OR Park sticker.</p>
      <div className="flex gap-8 w-full mt-5">
        <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6 w-full">
           <form className="flex flex-col gap-6">
          <div>
            <label className="block text-md font-medium text-gray-700 mb-1">Register Your Number</label>
             <input
              type="text"
              placeholder="e.g., Honda Civic 2022"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
            />
          </div>
          <div>
            <label className="block text-md font-medium text-gray-700 mb-1">Vehicle Make</label>
            {/* <Dropdown/> */}
            <input
              type="text"
              placeholder="ABC-1234"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
            />
          </div>
          <div>
            <label className="block text-md font-medium text-gray-700 mb-1">Vehicle Model</label>
            <input
              type="text"
              placeholder="e.g., Black, White"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
            />
          </div>
          <button className=" bg-buttonbg hover:bg-buttonbg/90 text-white font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2">
             Save Vehicle
          </button>
        </form>
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
  );
}