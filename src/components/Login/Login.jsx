"use client";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { loginUser } from "@/store/slices/authSlice";

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();

  const { loading, error,user } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");

  const handleLogin = async () => {
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    try {
      const response = await dispatch(loginUser({email:email}));

      if (response?.payload?.success) {
        toast.success("OTP sent to your email!");
        router.push(`/verify-otp?email=${encodeURIComponent(email)}`);
      } else {
        toast.error(response?.payload || "Something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleLogin();
  };
  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user]);

  return (
    <section
      className="min-h-[calc(100vh-137px)] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: "url('/loginbackground.jpeg')" }}
    >
      <div className="w-full max-w-[430px] rounded-lg bg-white shadow-soft px-10 py-8">
      
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-3">
            <img src="/qrparklogo.png" alt="QR Park" className="h-10 w-auto" />
            <span className="text-[18px] font-semibold text-primary">
              QR Park
            </span>
          </div>
        </div>

        <h1 className="text-[42px] font-bold text-primary mb-2 leading-none">
          Login
        </h1>
        <p className="text-[14px] text-gray-500 mb-8">
          Enter your email to receive a one-time password.
        </p>

       
        <label className="block text-[14px] font-medium text-primary mb-2">
          Email
        </label>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full h-[52px] border border-gray-300 rounded-md px-4 mb-6 outline-none text-[15px] focus:border-[#00796b] transition"
        />

        {error && (
          <p className="text-red-500 text-[13px] mb-4">{error}</p>
        )}

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full h-[52px] rounded-md bg-buttonbg text-white text-[20px] font-semibold hover:bg-[#00695c] transition mb-6 disabled:opacity-60"
        >
          {loading ? "Sending OTP..." : "Send OTP"}
        </button>

        <p className="text-center text-[14px] text-primary">
          Don&apos;t have an account?{" "}
          <span
            onClick={() => router.push("/signup")}
            className="text-[#00796b] font-medium cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </div>
    </section>
  );
}

// "use client";

// import { useRouter } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import { useState, useEffect } from "react";
// import { loginUser } from "@/store/slices/authSlice"; // make sure you create this
// import { toast } from "react-toastify";

// export default function Login() {
//   const router = useRouter();
//   const dispatch = useDispatch();

//   const { loading, error, user } = useSelector((state) => state.auth);

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleLogin = async () => {

//             try {
    
    
//                 const response = await dispatch(loginUser(formData));
//       // router.push("/dashboard");
// if(response?.payload.success){
//   toast.success("User Login Successfully");

// }else{
//   toast.error(response?.payload ||
//     "Something went wrong");
// }
//             } catch (error) {
//                 console.log(error);
//                 toast.error(error?.response?.data?.message ||
//                     "Something went wrong");
    
//             } finally {
//             }
    
//   };

//   useEffect(() => {
//     if (user) {
//       router.push("/dashboard");
//     }
//   }, [user]);

//   return (
//     <section
//       className="min-h-[calc(100vh-137px)] bg-cover bg-center bg-no-repeat flex items-center justify-center"
//       style={{
//         backgroundImage: "url('/loginbackground.jpeg')",
//       }}
//     >
//       <div className="w-full max-w-[430px] rounded-lg bg-white shadow-soft px-10 py-8">
        
   
//         <div className="flex justify-center mb-8">
//           <div className="flex items-center gap-3">
//             <img src="/qrparklogo.png" alt="QR Park" className="h-10 w-auto" />
//             <span className="text-[18px] font-semibold text-primary">
//               QR Park
//             </span>
//           </div>
//         </div>


//         <h1 className="text-[42px] font-bold text-primary mb-8 leading-none">
//           Login
//         </h1>

      
//         <label className="block text-[14px] font-medium text-primary mb-2">
//           Email
//         </label>
//         <input
//           name="email"
//           type="email"
//           placeholder="Enter your email"
//           onChange={handleChange}
//           className="w-full h-[52px] border border-gray-300 rounded-md px-4 mb-5 outline-none text-[15px]"
//         />

 
//         <label className="block text-[14px] font-medium text-primary mb-2">
//           Password
//         </label>
//         <input
//           name="password"
//           type="password"
//           placeholder="Enter your password"
//           onChange={handleChange}
//           className="w-full h-[52px] border border-gray-300 rounded-md px-4 mb-6 outline-none text-[15px]"
//         />

       
//         {error && (
//           <p className="text-red-500 text-[13px] mb-4">{error}</p>
//         )}

  
//         <button
//           onClick={handleLogin}
//           disabled={loading}
//           className="w-full h-[52px] rounded-md bg-buttonbg text-white text-[20px] font-semibold hover:bg-[#00695c] transition mb-6"
//         >
//           {loading ? "Logging in..." : "Login"}
//         </button>

   
//         <p className="text-center text-[14px] text-primary">
//           Don’t have an account?{" "}
//           <span
//             onClick={() => router.push("/signup")}
//             className="text-[#00796b] font-medium cursor-pointer"
//           >
//             Sign Up
//           </span>
//         </p>
//       </div>
//     </section>
//   );
// }
