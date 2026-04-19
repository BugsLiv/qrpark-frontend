import Image from "next/image";

export default function EmergencySection() {
    return (
        <div className=" px-6 py-10">
      <section className=" relative">
        <div className="mx-auto max-w-7xl  px-6 py-10">
  
          {/* Banner with HR lines flanking the label */}
          <div className="w-full  flex justify-center">
      <div className="relative w-full ">
        {/* Main container */}
        <div className="relative rounded-md border-b border-[#efd27a] bg-[#f9edc9] px-4 py-5 sm:px-8 sm:py-6 shadow-sm">
          {/* top decorative lines */}
          <div className="absolute left-6 right-6 top-4 h-px bg-[#efd27a] opacity-70" />

          {/* ribbon title */}
          <div className="absolute left-1/2 top-2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative min-w-[240px] sm:min-w-[360px] bg-[#f4bc32] px-6 py-2 text-center shadow-md">
              <div
                className="absolute left-0 top-0 h-full w-4 -skew-x-[-18deg] bg-[#f4bc32] -translate-x-2"
                aria-hidden="true"
              />
              <div
                className="absolute right-0 top-0 h-full w-4 skew-x-[-18deg] bg-[#f4bc32] translate-x-2"
                aria-hidden="true"
              />
              <h2 className="text-lg sm:text-[24px] font-extrabold tracking-tight text-primary leading-none">
                Emergency Assistance
              </h2>
            </div>
          </div>

          {/* subtitle */}
          <p className="pt-6 text-center text-[18px] sm:text-[22px] font-medium text-primary leading-snug">
            In case of an accident, send an SOS to the car owner instantly.
          </p>
        </div>
      </div>
    </div>
          {/* <div className="rounded-md  border-b border-[#e2c84a] bg-[#fff8d0] px-8  pb-5">
            <div className="mb-3 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#c9a800]" />
              <span className="rounded  bg-[#f5b800] px-6 py-1.5 text-2xl font-semibold text-[#3d2500]">
                Emergency Assistance
              </span>
              <div className="h-px flex-1 bg-[#c9a800]" />
            </div>
            <p className="text-center text-xl text-[#1a2a4a]">
              In case of an accident, send an <strong>SOS</strong> to the car owner instantly.
            </p>
          </div> */}
  
          {/* Three Icon Features */}
          <div className="mt-8 flex justify-center items-center md:gap-20 sm:gap-5">
  
            {/* No Phone Numbers Shared */}
            <div className="flex flex-col items-center px-4 py-8 ">
           <div className="flex w-full h-[100px]   justify-center items-center mb-2">
                        <Image src={"/nophone.png"} width={100} height={100} alt="PKFlag" />
                        </div>
              <p className="text-center text-[13px] font-semibold text-primary">No Phone Numbers Shared</p>
            </div>
            <div className="w-[2px] bg-gray-300 min-h-20" ></div>

  
            {/* Verified Users */}
            <div className="flex flex-col items-center px-4 py-8">
            <div className="flex w-full h-[100px]   justify-center items-center mb-2">
                        <Image src={"/verifieduser.png"} width={100} height={100} alt="PKFlag" />
                        </div>
              <p className="text-center text-[13px] font-semibold text-primary">Verified Users</p>
            </div>
            <div className="w-[2px] bg-gray-300 min-h-20" ></div>
  
            {/* Data Protected */}
            <div className="flex flex-col items-center px-4 py-8">
            <div className="flex w-full h-[100px]   justify-center items-center mb-2">
                        <Image src={"/dataprotected.png"} width={100} height={100} alt="PKFlag" />
                        </div>
              <p className="text-center text-[13px] font-semibold text-primary">Data Protected</p>
            </div>
  
          </div>
        </div>
      </section>
      </div>
    );
  }
// export default function EmergencySection() {
//     return (
//       <section className="px-6 py-16">
//         <div className="mx-auto max-w-7xl">
//           <div className="rounded-md bg-[#fff4c7] px-10 py-8 text-center shadow-sm">
//             <h2 className="text-4xl font-bold text-[#123d8d]">
//               Emergency Assistance
//             </h2>
//             <p className="mt-4 text-2xl text-slate-700">
//               In case of an accident, send an SOS to the car owner instantly.
//             </p>
//           </div>
  
//           <div className="mt-14 grid gap-8 md:grid-cols-3">
//             <div className="text-center">
//               <div className="mx-auto h-24 w-24 rounded-full border-4 border-blue-800" />
//               <p className="mt-4 text-xl font-semibold text-[#123d8d]">
//                 No Phone Numbers Shared
//               </p>
//             </div>
  
//             <div className="text-center">
//               <div className="mx-auto h-24 w-24 rounded-full border-4 border-teal-600" />
//               <p className="mt-4 text-xl font-semibold text-[#123d8d]">
//                 Verified Users
//               </p>
//             </div>
  
//             <div className="text-center">
//               <div className="mx-auto h-24 w-24 rounded-full border-4 border-blue-800" />
//               <p className="mt-4 text-xl font-semibold text-[#123d8d]">
//                 Data Protected
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }

// export default function EmergencySection() {
//     return (
//       <section className="bg-amber-50 py-16">
//         <div className="mx-auto max-w-7xl px-6 text-center">
//           <h2 className="text-4xl font-bold text-blue-900">
//             Emergency Assistance
//           </h2>
//           <p className="mt-4 text-xl text-slate-700">
//             In case of an accident, send an SOS to the car owner instantly.
//           </p>
  
//           <div className="mt-10 grid gap-6 md:grid-cols-3">
//             <div className="rounded-2xl border bg-white p-6">No Phone Numbers Shared</div>
//             <div className="rounded-2xl border bg-white p-6">Verified Users</div>
//             <div className="rounded-2xl border bg-white p-6">Data Protected</div>
//           </div>
//         </div>
//       </section>
//     );
//   }