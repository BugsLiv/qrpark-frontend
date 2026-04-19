import Image from "next/image";

const steps = [
    {
      number: '1',
      title: 'Register Online',
      desc: 'Sign up on our app or website.',
      src :"/registeronline.png"
    },
    {
      number: '2',
      title: 'Get Your Sticker',
      desc: 'Receive your QR tag for your car.',
      src :"/getsticker.png"

    },
    {
      number: '3',
      title: 'Scan & Contact',
      desc: 'Scan the QR to reach the owner.',
      src :"/scancontact.png"

    },
  ];
  
  export default function Yourprivacy() {
    return (
      <section className="bg- px-6 py-16">
        <div className="mx-auto max-w-7xl ">
            <div className="flex w-full justify-center items-center gap-5">
                <hr className="w-full border-slate-700" />
          <h2 className="text-center w-full max-w-120 text-3xl font-bold text-primary">
          Your Privacy & Safety First
          </h2>
          <hr className="w-full border-slate-700"/>
          </div>
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
    );
  }
