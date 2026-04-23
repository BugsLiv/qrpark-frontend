import { RiDeleteBin5Line } from "react-icons/ri";

import { FaCloudDownloadAlt } from "react-icons/fa";


import Image from "next/image";

export default function ManageVehiclePage() {
  return (
    <div className="w-full p-4">
      <h1 className="text-2xl text-primary font-bold">Manage Vehicle</h1>
<div className="flex w-full gap-6 p-4 shadow-soft mt-4">
    {/* Part 1 */}
    <div className="w-1/2 flex flex-col gap-2">
<div className="flex gap-2 justify-between items-end">
    <h1 className="text-2xl text-primary">LEA-2277</h1>
    <div className="flex gap-2">
    <button className="border border-primary px-2">Edit</button>
    <button className="border border-primary px-2">Don't Know</button>

    </div>
</div>
<hr className="w-full mt-2" />
<div className="flex flex-col gap-2">
    <div className="flex gap-2 items-center">
        <h2 className="text-md text-primary font-bold">Maristas Staap:</h2>
        <h4 className="text-sm text-primary ">10.12.2024</h4>
    </div>
    <div className="flex gap-2 items-center">
        <h2 className="text-md text-primary font-bold">Color:</h2>
        <h4 className="text-sm text-primary ">White</h4>
    </div>
    <div className="flex gap-2 items-center">
        <h2 className="text-md text-primary font-bold">Maristas Modal:</h2>
        <h4 className="text-sm text-primary ">14 Modal</h4>
    </div>
    <div className="flex gap-2 items-center">
        <h2 className="text-md text-primary font-bold">Maristas Conil:</h2>
        <h4 className="text-sm text-primary ">Heamol</h4>
    </div>
</div>
<div className="flex flex-col gap-2">
<div className="flex flex-col gap-2 ">
<h4 className="text-sm text-primary ">Corola</h4>

        <h2 className="text-md text-primary font-bold">April 24, 2024</h2>
    </div> 
    <div className="flex flex-col gap-2 ">
<h4 className="text-sm text-primary ">Regite Cer Orace</h4>

        <h2 className="text-md text-primary font-bold">Muhammad Ali</h2>
    </div> 
</div>
<div className="border border-primary bg-primary-side p-2 px-6 flex gap-1 justify-between">
    <div className="flex gap-2 items-center">
        <FaCloudDownloadAlt size={24} className="text-primary"/>
        <h3 className="text-primary text-lg">Download QR Code</h3>

    </div>
    <div className="flex gap-2 items-center">
        <RiDeleteBin5Line size={24} className="text-bgred"/>
        <h3 className="text-bgred text-lg">Delete QR Code</h3>

    </div>

</div>
    </div>



    {/* Part2 */}
    <div className="p-4 shadow-soft w-1/2 flex justify-center">
        <Image src={"/downloadqr.png"} width={300} height={300} alt="downloadqr" />

    </div>
</div>

    </div>

  );
}