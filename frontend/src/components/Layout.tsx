// src/components/Layout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0C0E]">
      {/* Navbar */}
      <Navbar />

      {/* Page content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
