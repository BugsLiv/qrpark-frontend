"use client";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "@/store/slices/authSlice";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { LuLoaderPinwheel } from "react-icons/lu";

export default function Signup() {
  const router = useRouter();
  const dispatch = useDispatch();
  const localStorageUserData= JSON.parse(localStorage.getItem("userInfo"))

  const { loading, user } = useSelector(
    (state) => state.auth
  );

  const [errors, setErrors] = useState({});

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    countryCode: "+92",
    email: "",

  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        formData.email
      )
    ) {
      newErrors.email = "Invalid email address";
    }


    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      const payload = {
        name: formData.name,
        phone: formData.phone,
        countryCode: formData.countryCode,
        email: formData.email,
      };

      const response = await dispatch(
        registerUser(payload)
      ).unwrap();

      toast.success(
        response?.message ||
          "User Created Successfully"
      );

      router.push("/login");

    } catch (error) {
      console.log(error);

      toast.error(
        error || "Something went wrong"
      );
    }
  };

  useEffect(() => {
    if (user && localStorageUserData) {
      router.push("/login");
    }
  }, [user,localStorageUserData]);

  return (
    <section
      className="min-h-[calc(100vh-137px)] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage:
          "url('/loginbackground.jpeg')",
      }}
    >
      <div className="w-full max-w-[430px] rounded-lg bg-white shadow-soft px-10 py-6">

        
        <h1 className="text-[42px] font-bold text-primary mb-8 leading-none">
          Sign Up
        </h1>

      
        <div className="mb-4">
          <label className="block text-[14px] font-medium text-primary mb-2">
            Full Name
          </label>

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className={`w-full h-[52px] rounded-md px-4 outline-none text-[15px] border ${
              errors.name
                ? "border-red-500"
                : "border-gray-300 focus:border-primary"
            }`}
          />

          {errors.name && (
            <p className="text-red-500 text-xs mt-1">
              {errors.name}
            </p>
          )}
        </div>

      
        <div className="mb-4">
          <label className="block text-[14px] font-medium text-primary mb-2">
            Phone Number
          </label>

          <div
            className={`flex items-center rounded-md overflow-hidden h-[52px] border ${
              errors.phone
                ? "border-red-500"
                : "border-gray-300"
            }`}
          >
            <div className="flex items-center px-4 border-r border-gray-300 bg-white h-full">
              <span className="text-[16px] text-gray-700">
                +92
              </span>
            </div>

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="3001234567"
              className="flex-1 px-4 outline-none text-[15px] h-full"
            />
          </div>

          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">
              {errors.phone}
            </p>
          )}
        </div>

  
        <div className="mb-4">
          <label className="block text-[14px] font-medium text-primary mb-2">
            Email
          </label>

          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={`w-full h-[52px] rounded-md px-4 outline-none text-[15px] border ${
              errors.email
                ? "border-red-500"
                : "border-gray-300 focus:border-primary"
            }`}
          />

          {errors.email && (
            <p className="text-red-500 text-xs mt-1">
              {errors.email}
            </p>
          )}
        </div>



        <button
          disabled={loading}
          onClick={handleSubmit}
          className="w-full h-[52px] rounded-md bg-buttonbg text-white text-[20px] font-semibold hover:bg-[#00695c] transition mb-6 disabled:opacity-70 flex items-center justify-center gap-2"
        >
          {loading && (
            <LuLoaderPinwheel
              size={18}
              className="animate-spin"
            />
          )}

          {loading
            ? "Creating..."
            : "Create Account"}
        </button>


        <p className="text-center text-[14px] text-primary">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-[#00796b] font-medium cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </section>
  );
}
