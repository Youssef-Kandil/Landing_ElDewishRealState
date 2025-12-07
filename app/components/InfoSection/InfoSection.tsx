"use client";

import React from "react";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";

interface InfoSectionProps {
  title: string;
  subtitle?: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

export default function InfoSection({
  title,
  subtitle,
  image,
  ctaText,
  ctaLink,
}: InfoSectionProps) {
  return (
    <section className="w-full py-10 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Side: Text + Image */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--primary)]">
            {title}
          </h2>
          {subtitle && (
            <p className="text-base sm:text-m text-gray-500">{subtitle}</p>
          )}
          <div className="w-full max-w-300 h-48 sm:h-64 relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src={image}
              alt="Section Image"
              fill
              className=""
            />
          </div>
        </div>

        {/* Right Side: Map Icon + CTA */}
        <div className="flex-1 flex flex-col items-center md:items-center space-y-4">
            <div className="text-[var(--primary)] text-6xl sm:text-7xl animate-bounce-slow">
            <FaMapMarkerAlt />
          </div>
          <a
            href={ctaLink}
            className="mt-2 bg-[#002B5B] text-white px-6 py-3 rounded-xl text-base hover:bg-[#003b7a] transition-colors"
          >
            {ctaText}
          </a>
        </div>
      </div>
            {/* Tailwind custom animation */}
            <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
    </section>
  );
}
