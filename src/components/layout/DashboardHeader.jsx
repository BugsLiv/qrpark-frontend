"use client";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/slices/authSlice";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function DashboardHeader() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { user } = useSelector((state) => state.auth);
console.log("user",user)
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    setMounted(true);
  }, []);


// Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);
  if (!mounted) return null;

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  return (
    <header className="bg-primary text-white shadow-md">
      <div className="mx-auto flex items-center justify-between px-10 py-4">

        <Link href="/">
          <h1 className="text-3xl font-bold">QR Park</h1>
        </Link>

        <nav className="hidden gap-8 md:flex items-center">

          <Link href="/">Home</Link>
          <Link href="/dashboard/add-vehicle">Add vehicle</Link>
          <Link href="/faq">FAQs</Link>

          {/* <Link href="/dashboard/account-settings">
            <button className="rounded-full bg-buttonbg px-6 py-2 font-semibold hover:bg-teal-600">
              Settings
            </button>
          </Link> */}

          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>

            <button
              onClick={() => setOpen(!open)}
              className="rounded-full bg-buttonbg px-6 py-2 font-semibold hover:bg-teal-600"
              // className="flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-full font-medium"
            >
              {user?.name || "User"}
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg py-2 z-50">

                <button
                  onClick={() => {
                    
                    router.push("/dashboard/account-settings")
                    setOpen(!open)
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Profile
                </button>

                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                >
                  Logout
                </button>

              </div>
            )}

          </div>

        </nav>
      </div>
    </header>
  );
}
