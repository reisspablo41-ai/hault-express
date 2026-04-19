'use client';

import { useState, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '../Components/NavBar';

export default function ShipmentLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="flex min-h-screen bg-[#f4f5f7]">
      {/* 
        Mobile Top Header 
        Only visible on small screens. Contains the Hamburger icon. 
        Offset by top-[76px] to comfortably sit under the external global header.
      */}
      <div className="md:hidden fixed top-[76px] w-full h-16 bg-[#0A0A0B] flex items-center justify-between px-4 z-40 shadow-md">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 text-gray-300 hover:text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="text-white font-bold tracking-wider text-sm">ADMIN PANEL</span>
        </div>
      </div>

      {/* 
        Mobile Sidebar Overlay 
        Darkens the background when the sidebar is open on mobile
      */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* 
        Sidebar Container 
        - Desktop: Static, fixed width, always visible.
        - Mobile: Fixed position, sliding in from the left, z-index above overlay.
      */}
      <div
        className={`fixed md:static inset-y-0 left-0 w-72 shrink-0 bg-[#0A0A0B] z-50 transform transition-transform duration-300 ease-in-out md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <NavBar onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Main content area */}
      <main className="flex-1 flex flex-col min-w-0 max-h-screen overflow-y-auto pt-20 md:pt-20">
        <div className="flex-1 p-4 md:p-10">
          <div className="max-w-7xl mx-auto">
            <Suspense fallback={<div>Loading Dashboard...</div>}>
              {children}
            </Suspense>
          </div>
        </div>

        <footer className="py-4 px-6 md:px-10 text-sm text-gray-500 text-center border-t border-gray-200">
          © {new Date().getFullYear()} Hault Express Delivery Admin. Design system initialized.
        </footer>
      </main>
    </div>
  );
}
