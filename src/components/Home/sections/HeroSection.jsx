import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-[#f4f8fc] bg-[url('/yourcamara.jpg')]
        bg-cover
        bg-center
        bg-no-repeat
        min-h-[500px]">
      <div className=" items-center ">
        <div className="px-10 py-16">
          <h1 className="text-6xl font-bold leading-tight text-primary">
            Park Smart. Stay Connected.
          </h1>
          <p className="mt-6 text-2xl text-slate-700">
            Contact a car owner instantly without sharing personal numbers.
          </p>
          <button className="mt-10 rounded-full bg-buttonbg px-10 py-4 text-xl font-semibold text-white shadow-lg">
            Register Your Vehicle
          </button>
        </div>
      </div>
    </section>
  );
}
// export default function HeroSection() {
//     return (
//       <section className="bg-slate-100">
//         <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2">
//           <div>
//             <h2 className="text-5xl font-bold text-blue-900 leading-tight">
//               Park Smart. Stay Connected.
//             </h2>
//             <p className="mt-4 text-xl text-slate-600">
//               Contact a car owner instantly without sharing personal numbers.
//             </p>
//             <button className="mt-8 rounded-full bg-teal-500 px-8 py-4 text-lg font-semibold text-white hover:bg-teal-600">
//               Register Your Vehicle
//             </button>
//           </div>
  
//           <div className="rounded-3xl bg-slate-200 p-10 text-center">
//             <p className="text-slate-500">Vehicle QR sticker preview</p>
//           </div>
//         </div>
//       </section>
//     );
//   }