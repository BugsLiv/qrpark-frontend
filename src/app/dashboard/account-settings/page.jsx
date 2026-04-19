// src/app/(dashboard)/account-settings/page.tsx
import { MdContactMail } from "react-icons/md";


export default function AccountSettingsPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
          <h1 className="text-xl font-bold text-gray-800">Account Settings</h1>
          <p className="text-sm text-gray-500">Manage your profile and preferences</p>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
              MA
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Muhammad Ali</h3>
              <p className="text-sm text-gray-500">Premium Member since 2024</p>
              <button className="text-xs text-buttonbg hover:underline">Change Avatar</button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
              <MdContactMail size={18} className="text-gray-400" />
              <div className="flex-1">
                <label className="block text-xs text-gray-500">Full Name</label>
                <p className="text-gray-800 font-medium">Muhammad Ali</p>
              </div>
              <button className="text-sm text-buttonbg">Edit</button>
            </div>
            <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
              <MdContactMail size={18} className="text-gray-400" />
              <div className="flex-1">
                <label className="block text-xs text-gray-500">Email Address</label>
                <p className="text-gray-800 font-medium">m.ali@example.com</p>
              </div>
              <button className="text-sm text-buttonbg">Edit</button>
            </div>
            <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
              <MdContactMail size={18} className="text-gray-400" />
              <div className="flex-1">
                <label className="block text-xs text-gray-500">Phone Number</label>
                <p className="text-gray-800 font-medium">+92 312 3456789</p>
              </div>
              <button className="text-sm text-buttonbg">Edit</button>
            </div>
            <div className="flex items-center gap-3">
              <MdContactMail size={18} className="text-gray-400" />
              <div className="flex-1">
                <label className="block text-xs text-gray-500">Password</label>
                <p className="text-gray-800 font-medium">••••••••</p>
              </div>
              <button className="text-sm text-buttonbg">Change</button>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100">
            <button className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-primary/90">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}