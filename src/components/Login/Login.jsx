"use client";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { loginUser } from "@/store/slices/authSlice"; // make sure you create this
import { toast } from "react-toastify";

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();

  const { loading, error, user } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {

            try {
    
    
                const response = await dispatch(loginUser(formData));
                toast.success("User Login Successfully");
            } catch (error) {
                console.log(error);
                toast.error(error?.response?.data?.message ||
                    "Something went wrong");
    
            } finally {
            }
    
  };

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user]);

  return (
    <section
      className="min-h-[calc(100vh-137px)] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: "url('/loginbackground.jpeg')",
      }}
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


        <h1 className="text-[42px] font-bold text-primary mb-8 leading-none">
          Login
        </h1>

      
        <label className="block text-[14px] font-medium text-primary mb-2">
          Email
        </label>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          onChange={handleChange}
          className="w-full h-[52px] border border-gray-300 rounded-md px-4 mb-5 outline-none text-[15px]"
        />

 
        <label className="block text-[14px] font-medium text-primary mb-2">
          Password
        </label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          onChange={handleChange}
          className="w-full h-[52px] border border-gray-300 rounded-md px-4 mb-6 outline-none text-[15px]"
        />

       
        {error && (
          <p className="text-red-500 text-[13px] mb-4">{error}</p>
        )}

  
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full h-[52px] rounded-md bg-buttonbg text-white text-[20px] font-semibold hover:bg-[#00695c] transition mb-6"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

   
        <p className="text-center text-[14px] text-primary">
          Don’t have an account?{" "}
          <span
            onClick={() => router.push("/signup")}
            className="text-[#00796b] font-medium cursor-pointer"
          >
            Sign Up
          </span>
        </p>
      </div>
    </section>
  );
}
