// import Image from "next/image";

// const steps = [
//     {
//       number: '1',
//       title: 'Register Your Vehicle',
//       desc: 'Sign up on our website or mobile app to create your account your vehicle',
//       src :"/registeronline.png"
//     },
//     {
//       number: '2',
//       title: 'Receive Your QR Sticker',
//       desc: "We'll sand uou a cocaatbe sticker to place cot your mo gbe contact profile",
//       src :"/getsticker.png"

//     },
//     {
//       number: '3',
//       title: 'Scan & Contact Instantly',
//       desc: 'Anyone can scan the QR code dto on to your meth dunation imigration',
//       src :"/scancontact.png"

//     },
//   ];
//     export default function Worksection() {
//       return (
//         <section className="bg- px-6 py-16">
//           <div className="mx-auto max-w-7xl ">
//               <div className="flex flex-col justify-center items-center gap-2">
//             <h1 className="text-center text-4xl font-bold text-primary">
//               How It Works
//             </h1>
//             <p className="text-lg  text-primary-light">
//               Easy steps to help car owners stay connected and protected
//             </p>
//             </div>
//             <div className="mt-14  flex flex-col sm:flex-row gap-10 w-full justify-between items-center">
//               {steps.map((step) => (
//                 <div key={step.number} className="shadow-soft relative p-6   items-center  flex flex-col ">
//                   <div className="flex w-full h-[200px]   justify-center items-center mb-2">
//                   <Image src={step?.src} width={200} height={200} alt="PKFlag" />
//                   </div>
//                   {/* <div className="mx-auto mb-6 h-28 w-28 rounded-2xl border-2 border-primary" /> */}
//                   <h3 className="text-2xl font-bold text-primary">
//                     {step.number}. {step.title}
//                   </h3>
//                   <p className="mt-3 text-center  text-md  text-slate-700">{step.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       );
//     }
import Image from "next/image";

const steps = [
  {
    number: '1',
    title: 'Register Your Vehicle',
    desc: 'Sign up on our website or mobile app to create your account and register your vehicle.',
    src: "/registeronline.png"
  },
  {
    number: '2',
    title: 'Receive Your QR Sticker',
    desc: "We'll send you a scannable sticker to place on your vehicle as your contact profile.",
    src: "/getsticker.png"
  },
  {
    number: '3',
    title: 'Scan & Contact Instantly',
    desc: 'Anyone can scan the QR code to instantly get your vehicle contact information.',
    src: "/scancontact.png"
  },
];

export default function Worksection() {
  return (
    <section className="px-6 py-16 ">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-center text-4xl font-bold text-primary">
            How It Works
          </h1>
          <p className="text-lg text-primary-light">
            Easy steps to help car owners stay connected and protected
          </p>
        </div>

        <div className="mt-24 flex flex-col sm:flex-row gap-10 w-full justify-between items-stretch">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center flex-1 pt-20 pb-8 px-6 shadow-soft rounded-2xl bg-white"
            >
              {/* Image floats above card */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-45 h-45 flex items-center justify-center">
                <Image
                  src={step.src}
                  width={250}
                  height={250}
                  alt={step.title}
                  className="object-contain drop-shadow-md"
                />
              </div>

              <h3 className="text-xl font-bold mt-20 text-primary text-center">
                {step.number}. {step.title}
              </h3>
              <p className="mt-3 text-center text-md text-slate-700">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}