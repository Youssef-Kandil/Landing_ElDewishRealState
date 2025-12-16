"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter ,FaTiktok,FaSnapchatGhost} from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="w-full bg-[#002B5B] text-white py-8 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Text */}
        <div className="text-center md:text-left space-y-1">
          <h3 className="text-xl font-bold text-[var(--primary)]">BLUE BAY</h3>
          <p className="text-sm text-gray-600">حيث الفخامة تلتقي مع الراحة</p>
        </div>

        {/* Right Social Icons */}
        <div className="flex flex-col items-center md:items-end space-y-2">
          <div className="flex gap-4 text-white-700 text-lg">
            <a href="https://www.facebook.com/?locale=ar_AR" aria-label="Facebook" className="hover:text-blue-600 transition-colors">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/maje.dre/" aria-label="Instagram" className="hover:text-pink-500 transition-colors">
              <FaInstagram />
            </a>
            <a href="https://x.com/maje_dre" aria-label="Twitter" className="hover:text-blue-400 transition-colors">
              <FaTwitter />
            </a>
            <a href="https://www.snapchat.com/add/majed.dowish?share_id=r31vUY64iTg&locale=ar-EG" aria-label="LinkedIn" className="hover:text-blue-700 transition-colors">
              <FaSnapchatGhost />
            </a>
            <a href="https://www.tiktok.com/@maje.dre" aria-label="LinkedIn" className="hover:text-blue-700 transition-colors">
              <FaTiktok />
            </a>
          </div>

          {/* Bottom line with copyright */}
          <div className="mt-2 text-center md:text-right text-xs text-gray-500">
            <hr className="border-gray-300 mb-1" />
            جميع الحقوق محفوظة &copy; 2025
          </div>
        </div>
      </div>
    </footer>
  );
}
