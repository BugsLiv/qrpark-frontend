"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { LuLoaderPinwheel } from "react-icons/lu";
import axiosInstance from "@/lib/axios";
import { updateUser } from "@/store/slices/authSlice";
import { toast } from "react-toastify";
import ConfirmationModal from "@/components/Common/ConfirmationModal";


export default function AccountSettingsPage() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const [isOn, setIsOn] = useState(user?.phoneVisible);
  console.log("isOn",isOn)
  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    countryCode: "+92",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user?.name || "",
        phone: user?.phone || "",
        countryCode: user?.countryCode || "+92",
        email: user?.email || "",
        password: "",
        confirmPassword: "",
      });
    }
  }, [user]);

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

  // ================= VALIDATION =================
  const validateForm = () => {
    let newErrors = {};

    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    // Phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    // Password validation only if user entering password
    if (formData.password) {
      if (formData.password.length < 8) {
        newErrors.password =
          "Password must be at least 8 characters long";
      }

      if (
        !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)
      ) {
        newErrors.password =
          "Password must contain uppercase, lowercase and number";
      }

      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Please confirm password";
      } else if (
        formData.password !== formData.confirmPassword
      ) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);

      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        countryCode: formData.countryCode,
      };

      if (formData.password) {
        payload.password = formData.password;
      }
      
      const response = await axiosInstance.put(
        "auth/updateMe",
        payload
      );
      if(response?.data?.success){
        dispatch(updateUser(response?.data?.data))
           toast.success(response?.data?.message);
        setFormData((prev) => ({
          ...prev,
          password: "",
          confirmPassword: "",
        }));
      }else{
        toast.error(response?.data?.message);

      }
   
    } catch (error) {
      console.log(error);
      toast.error( error?.response?.data?.message ||
        "Something went wrong");

    } finally {
      setLoading(false);
    }
  };
  const handlePhoneVisibility=async ()=>{
    try {
      setLoading(true);

      const payload = {
        phoneVisible: !isOn,
      };
      const response = await axiosInstance.put(
        "auth/phone-visibility",
        payload
      );
      if(response?.data?.success){
        setIsOn(!isOn)
        dispatch(updateUser(response?.data?.data))
           toast.success(response?.data?.message);
      }else{
        toast.error(response?.data?.message);

      }
   
    } catch (error) {
      console.log(error);
      toast.error( error?.response?.data?.message ||
        "Something went wrong");

    } finally {
      setLoading(false);
    }
  }
  const handleSave = async () => {
    setSaving(true);
    await handlePhoneVisibility()
    setSaving(false);
    setOpen(false);
  };
  return (
    <>
    <div className="p-6 w-full">
      <h1
        className="text-2xl font-bold text-primary mb-6"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Account Settings
      </h1>

      <div className="bg-background rounded-xl border border-gray-200 p-8">
        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-primary mb-1">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className={`w-full px-3 py-2 bg-white border rounded-md text-sm focus:ring-2 focus:ring-primary/20 outline-none ${
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

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-primary mb-1">
            Phone Number
          </label>

          <div
            className={`flex items-center rounded-md overflow-hidden bg-white h-[42px] border ${
              errors.phone
                ? "border-red-500"
                : "border-gray-300"
            }`}
          >
            <div className="flex items-center px-4 border-r border-gray-300 bg-white h-full">
              <span className="text-[15px] text-gray-700">
                {formData.countryCode}
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

        {/* Email */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-primary mb-1">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
            className={`w-full px-3 py-2 bg-white border rounded-md text-sm focus:ring-2 focus:ring-primary/20 outline-none ${
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
<div  className="mb-2">
<label className="block text-sm font-semibold text-primary mb-1">
            Phone Visibility
          </label>
<button
onClick={() => setOpen(true)}
      // onClick={() => setIsOn(!isOn)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-buttonbg focus:ring-offset-2 ${
        isOn ? 'bg-buttonbg' : 'bg-gray-200'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
          isOn ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
</div>
        {/* Password Section */}
        <div className="mb-2">
          <p className="text-sm text-primary mb-3">
            Update your password using the fields below:
          </p>

          {/* Password */}
          <div className="relative mb-3">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="New Password"
              className={`w-full px-3 py-2 pr-12 bg-white border rounded-md text-sm focus:ring-2 focus:ring-primary/20 outline-none ${
                errors.password
                  ? "border-red-500"
                  : "border-gray-300 focus:border-primary"
              }`}
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? (
                <IoMdEyeOff size={18} />
              ) : (
                <IoMdEye size={18} />
              )}
            </button>

            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={
                showConfirmPassword ? "text" : "password"
              }
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className={`w-full px-3 py-2 pr-12 bg-white border rounded-md text-sm focus:ring-2 focus:ring-primary/20 outline-none ${
                errors.confirmPassword
                  ? "border-red-500"
                  : "border-gray-300 focus:border-primary"
              }`}
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showConfirmPassword ? (
                <IoMdEyeOff size={18} />
              ) : (
                <IoMdEye size={18} />
              )}
            </button>

            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword}
              </p>
            )}

            {/* Match Success */}
            {formData.password &&
              formData.confirmPassword &&
              formData.password ===
                formData.confirmPassword && (
                <p className="text-green-600 text-xs mt-1">
                  Password matched
                </p>
              )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-buttonbg hover:bg-buttonbg/90 disabled:opacity-70 text-white font-semibold py-2 px-10 rounded-md text-sm flex items-center gap-2"
          >
            {loading && (
              <LuLoaderPinwheel
                size={16}
                className="animate-spin"
              />
            )}

            {loading ? "Saving..." : "Save Changes"}
          </button>

          <button className="border border-gray-300 text-gray-600 hover:bg-gray-50 font-normal px-10 py-2 rounded-md text-sm">
            Cancel
          </button>
        </div>
      
      </div>
    </div>

          <ConfirmationModal
            isOpen={open}
            onClose={() => setOpen(false)}
            title="Change Phone Visibility"
            description={
              <>
                <p>Are you sure you want to change the QR Park phone visibility from {isOn && "Show"} to {isOn?"Hide":"Show"} associated with this vehicle?</p>
                <p className="mt-3">The phone visibility changes will no longer allow anyone in the app to contact you.</p>
              </>
            }
            confirmButton={{
              label: 'Save Change',
              variant: 'primary',
              onClick: handleSave,
              loading: saving,
            }}
            cancelLabel="Cancel"
          />
    </>
  );
}
