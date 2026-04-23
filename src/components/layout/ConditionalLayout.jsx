// src/components/layout/ConditionalLayout.tsx
"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import DashboardHeader from "./DashboardHeader";
import Header from "./Header";



export default function ConditionalLayout({children}) {
  const pathname = usePathname();
  // Dashboard routes start with /dashboard
  const isDashboard = pathname?.startsWith("/dashboard");

  return (
    <>
      {isDashboard ? <DashboardHeader />:<Header/>}
      <main className="flex-1">{children}</main>
      {/* {!isDashboard && <Footer />} */}
      <Footer />

    </>
  );
}