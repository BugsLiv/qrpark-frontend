"use client";

import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";

import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-full antialiased bg-background">
      <button
        onClick={() => setSidebarOpen(true)}
        className="fixed top-4 left-4 z-30 p-2 bg-white rounded-md shadow-md lg:hidden"
      >
        <TiThMenu size={24} className="text-primary" />
      </button>

      <div className="flex flex-col lg:flex-row">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1  overflow-x-auto ">
          <div className="max-w-10xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
