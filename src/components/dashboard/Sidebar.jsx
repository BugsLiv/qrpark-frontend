"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLocationDot } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { LuTruck } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineAddIcCall } from "react-icons/md";
import { MdContactEmergency } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";


const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: IoHomeOutline },
  { name: "Add Vehicle", href: "/dashboard/add-vehicle", icon: LuTruck },
  { name: "Account Settings", href: "/dashboard/account-settings", icon: IoMdSettings },
  { name: "Messages", href: "/dashboard/messages", icon: FaMessage },

];

export default function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar panel */}
      <div   className={`
     py-4
          fixed top-0 left-0 h-full w-72 bg-primary-side shadow-2xl z-50 
          transform transition-transform duration-300 ease-in-out
          lg:relative lg:translate-x-0 lg:shadow-xl lg:h-[calc(100vh-140px)] lg:sticky lg:top-6
          flex flex-col border border-gray-100
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}>
      <aside
        // className={`
        //   fixed top-0 left-0 h-full w-72 bg-primary-side shadow-2xl z-50 
        //   transform transition-transform duration-300 ease-in-out
        //   lg:relative lg:translate-x-0 lg:shadow-xl lg:rounded-2xl mr-4 lg:h-[calc(100vh-140px)] lg:sticky lg:top-6
        //   flex flex-col border border-gray-100
        //   ${isOpen ? "translate-x-0" : "-translate-x-full"}
        // `}
      >
        {/* Header with close button on mobile */}
        <div className="flex justify-between items-center  ">
          {/* <div>
            <h1 className="text-2xl font-bold text-primary">QR Park</h1>
            <p className="text-xs text-gray-500">Smart Parking</p>
          </div> */}
          <button
            onClick={onClose}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            <FaLocationDot size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1  ">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose} // close sidebar on navigation (mobile)
                className={`flex items-center gap-3 px-4 py-3  transition ${
                  active
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                }`}
              >
                <item.icon size={20} className="text-primary" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
        <div className="flex justify-center flex-col items-center mt-40 gap-5">
        <hr className="w-[90%] flex justify-center items-center border-slate-700"/>
        <div className="flex flex-col gap-5">
<div className="flex items-center gap-3">
<MdOutlineAddIcCall size={20} className="text-primary" />
<p className="text-sm text-primary">Need Help?</p>
</div>
<div className="flex items-center gap-3">
<MdContactEmergency className="text-primary" size={20} />
<p className="text-sm text-primary">+92 312 2456789 Help?</p>
</div>
<div className="flex items-center gap-3">
<IoLocation className="text-primary" size={20} />
<p className="text-sm text-primary">233 Main Street Lahore, Paksitan</p>
</div>
        </div>
        </div>
      </aside>
      </div>
    </>
  );
}
