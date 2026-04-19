import { FaClock } from "react-icons/fa";
export default function Login() {
    return (
      <section
        className="min-h-[calc(100vh-137px)] bg-cover bg-center bg-no-repeat flex items-center justify-center "
        style={{
          backgroundImage: "url('/loginbackground.jpeg')",
        }}
      >
        <div className="w-full max-w-[430px] rounded-lg bg-white shadow-soft px-10 py-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-3">
              <img
                src="/qrparklogo.png"
                alt="QR Park"
                className="h-10 w-auto"
              />
              <span className="text-[18px] font-semibold text-primary">
                QR Park
              </span>
            </div>
          </div>
  
          {/* Title */}
          <h1 className="text-[42px] font-bold text-primary mb-8 leading-none">
            Login
          </h1>
  
          {/* Label */}
          <label className="block text-[14px] font-medium text-primary mb-2">
            Phone Number
          </label>
  
          {/* Input */}
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden h-[52px] mb-6">
            <div className="flex items-center px-4 border-r border-gray-300 bg-white">
              <span className="text-[16px] text-gray-700">+92</span>
              <svg
                className="w-4 h-4 ml-2 text-gray-500"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>
  
            <input
              type="text"
              placeholder="Phone Number"
              className="flex-1 px-4 outline-none text-[15px]"
            />
          </div>
  
          {/* Send OTP Button */}
          <button className="w-full h-[52px] rounded-md bg-buttonbg text-white text-[20px] font-semibold hover:bg-[#00695c] transition mb-6">
            Send OTP
          </button>
  
          {/* Verify Button */}
          <button className="w-full h-[52px] rounded-md border border-gray-300 text-primary text-[18px] font-medium flex items-center justify-center gap-2 mb-4">
          <FaClock color="#1a7f80" />
            {/* <span className="w-5 h-5 rounded-full border border-[#00796b] flex items-center justify-center text-[12px]">
              ✓
            </span> */}
            Verify Phone
          </button>
  
          {/* Resend */}
          <div className="text-right text-[13px] text-primary">
            Resed OTP (0:2)
          </div>
        </div>
      </section>
    );
  }