"use client";

import React, { useState } from "react";
import Image from "next/image";

interface GallerySectionProps {
  title: string;
  subtitle?: string;
  interiorImages: string[];
  exteriorImages: string[];
}

export default function GallerySection({
  title,
  subtitle,
  interiorImages,
  exteriorImages,
}: GallerySectionProps) {
  const [activeTab, setActiveTab] = useState<"interior" | "exterior">("interior");
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const imagesToShow = activeTab === "interior" ? interiorImages : exteriorImages;

  return (
    <section className="w-full py-10 px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--primary)] text-center">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-base sm:text-lg text-gray-600 text-center mt-2">
          {subtitle}
        </p>
      )}

      {/* Tabs */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => setActiveTab("interior")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === "interior"
              ? "bg-[#002B5B] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          من الداخل
        </button>
        <button
          onClick={() => setActiveTab("exterior")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === "exterior"
              ? "bg-[#002B5B] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          من الخارج
        </button>
      </div>

      {/* Image Gallery */}
      <div className="mt-6 overflow-x-auto">
        <div className="flex gap-4">
          {imagesToShow.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 rounded-2xl overflow-hidden border border-gray-200 shadow-lg relative group cursor-pointer"
              onClick={() => setPreviewImage(src)}
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-3"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Preview Popup */}
      {previewImage && (
  <div
    className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    onClick={() => setPreviewImage(null)}
  >
    <div className="relative w-full max-w-3xl h-[80vh] sm:h-[70vh]">
      <Image
        src={previewImage}
        alt="Preview"
        fill
        className="object-contain rounded-xl"
      />
      <button
        className="absolute top-4 right-4 text-white text-2xl font-bold"
        onClick={() => setPreviewImage(null)}
      >
        &times;
      </button>
    </div>
  </div>
)}

    </section>
  );
}
