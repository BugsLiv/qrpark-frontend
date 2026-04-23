export default function AccountSettingsPage() {
  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl font-bold text-primary mb-6" style={{ fontFamily: "Georgia, serif" }}>
        Account Settings
      </h1>

      <div className="bg-background rounded-xl border border-gray-200 p-8">
        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-primary mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-primary mb-1">Phone Number</label>
          <input
            type="text"
            placeholder="OTP required to login"
            className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md text-sm text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-primary mb-1">Email</label>
          <input
            type="text"
            placeholder="Company, Optional"
            className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md text-sm text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
          />
        </div>

        {/* Password Section */}
        <div className="mb-2">
          <p className="text-sm text-primary mb-3">Update your password using the fields below:</p>
          <input
            type="password"
            placeholder="New Password"
            className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md text-sm text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none mb-3"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md text-sm text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button className=" bg-buttonbg hover:bg-buttonbg/90 text-white font-semibold py-2 px-30 rounded-md text-sm">
            Save Changes
          </button>
          <button className=" border border-gray-300 text-gray-600 hover:bg-gray-50 font-normal px-20 py-2 rounded-md text-sm">
            Comments
          </button>
        </div>
      </div>
    </div>
  );
}