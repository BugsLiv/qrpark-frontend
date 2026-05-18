"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { verifyOtp, loginUser } from "@/store/slices/authSlice";
import { toast } from "react-toastify";

const OTP_LENGTH = 6;
const RESEND_COOLDOWN = 60; 

export default function VerifyOtp() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();

  const email = searchParams.get("email") || "";

  const { loading, error, user } = useSelector((state) => state.auth);

  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const [cooldown, setCooldown] = useState(0);
  const inputRefs = useRef([]);
  useEffect(() => {
    if (user) router.push("/dashboard");
  }, [user]);

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [cooldown]);

  const handleOtpChange = (index, value) => {
    const digit = value.replace(/\D/g, "").slice(-1);
    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);

    if (digit && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
    if (e.key === "Enter") handleVerify();
  };

  const handlePaste = (e) => {
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
    if (!pasted) return;
    const newOtp = Array(OTP_LENGTH).fill("");
    pasted.split("").forEach((ch, i) => { newOtp[i] = ch; });
    setOtp(newOtp);
    const lastIndex = Math.min(pasted.length, OTP_LENGTH - 1);
    inputRefs.current[lastIndex]?.focus();
    e.preventDefault();
  };

  const handleVerify = async () => {
    const otpString = otp.join("");
    if (otpString.length < OTP_LENGTH) {
      toast.error("Please enter the complete 6-digit OTP");
      return;
    }

    try {
      const response = await dispatch(verifyOtp({ email, otp: otpString }));

      if (response?.payload?.success) {
        toast.success("Logged in successfully!");
        router.push("/dashboard");
      } else {
        toast.error(response?.payload || "Invalid or expired OTP");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  const handleResend = async () => {
    if (cooldown > 0) return;
    try {
      const response = await dispatch(loginUser(email));
      if (response?.payload?.success) {
        toast.success("New OTP sent!");
        setOtp(Array(OTP_LENGTH).fill(""));
        setCooldown(RESEND_COOLDOWN);
        inputRefs.current[0]?.focus();
      } else {
        toast.error(response?.payload || "Could not resend OTP");
      }
    } catch {
      toast.error("Something went wrong");
    }
  };

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
        <button
          onClick={() => router.push("/login")}
          className="flex items-center gap-1 text-[13px] text-gray-500 hover:text-primary mb-6 transition"
        >
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        <h1 className="text-[36px] font-bold text-primary mb-2 leading-none">
          Verify Email
        </h1>
        <p className="text-[14px] text-gray-500 mb-1">
          We sent a 6-digit code to
        </p>
        <p className="text-[14px] font-semibold text-primary mb-8 truncate">
          {email}
        </p>

        <div className="flex gap-3 justify-between mb-6" onPaste={handlePaste}>
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className={`
                w-[52px] h-[56px] text-center text-[22px] font-bold border rounded-md outline-none transition
                ${digit
                  ? "border-[#00796b] bg-[#f0faf8] text-primary"
                  : "border-gray-300 text-primary"}
                focus:border-[#00796b] focus:ring-2 focus:ring-[#00796b]/20
              `}
            />
          ))}
        </div>

        {error && (
          <p className="text-red-500 text-[13px] mb-4">{error}</p>
        )}

        <button
          onClick={handleVerify}
          disabled={loading}
          className="w-full h-[52px] rounded-md bg-buttonbg text-white text-[20px] font-semibold hover:bg-[#00695c] transition mb-5 disabled:opacity-60"
        >
          {loading ? "Verifying..." : "Verify & Login"}
        </button>

        <p className="text-center text-[14px] text-gray-500">
          Didn&apos;t receive the code?{" "}
          {cooldown > 0 ? (
            <span className="text-gray-400">
              Resend in {cooldown}s
            </span>
          ) : (
            <span
              onClick={handleResend}
              className="text-[#00796b] font-medium cursor-pointer hover:underline"
            >
              Resend OTP
            </span>
          )}
        </p>
      </div>
    </section>
  );
}