"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";


export default function WhatsAppButton({whatsapp_url}:{whatsapp_url:string}) {
  return (
    <a
      href={whatsapp_url} // غير الرقم برقمك
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-50"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
}
