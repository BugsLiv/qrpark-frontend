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
  
  export default function HowItWorks() {
    return (
      <section className="bg- px-6 py-16">
        <div className="mx-auto max-w-7xl ">
            <div className="flex justify-center items-center gap-10">
                <hr className="w-sm border-slate-700" />
          <h2 className="text-center text-3xl font-bold text-primary">
            How It Works
          </h2>
          <hr className="w-sm border-slate-700"/>
          </div>
          <div className="mt-14 flex flex-col sm:flex-row gap-10 w-full items-center">
            {steps.map((step) => (
              <div key={step.number} className=" w-full p-5 items-center sm:items-start flex flex-col">
                <div className="flex w-full h-[200px]   justify-center items-center mb-2">
                <Image src={step?.src} width={200} height={200} alt="PKFlag" />
                </div>
                {/* <div className="mx-auto mb-6 h-28 w-28 rounded-2xl border-2 border-primary" /> */}
                <h3 className="text-2xl font-bold text-primary">
                  {step.number}. {step.title}
                </h3>
                <p className="mt-3 ml-6 text-md  text-slate-700">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-7xl h-[2px] bg-gray-300 mt-10"></div>
      </section>
    );
  }

// const steps = [
//     {
//       title: 'Register Online',
//       desc: 'Sign up on our app or website.',
//     },
//     {
//       title: 'Get Your Sticker',
//       desc: 'Receive your QR tag for your car.',
//     },
//     {
//       title: 'Scan & Contact',
//       desc: 'Scan the QR to reach the owner.',
//     },
//   ];
  
//   export default function HowItWorks() {
//     return (
//       <section id="how-it-works" className="py-16">
//         <div className="mx-auto max-w-7xl px-6">
//           <h2 className="text-center text-4xl font-bold text-blue-900">
//             How It Works
//           </h2>
  
//           <div className="mt-12 grid gap-8 md:grid-cols-3">
//             {steps.map((step, index) => (
//               <div key={step.title} className="rounded-2xl border p-8 shadow-sm">
//                 <h3 className="text-2xl font-bold text-blue-900">
//                   {index + 1}. {step.title}
//                 </h3>
//                 <p className="mt-3 text-slate-600">{step.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }