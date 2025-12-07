import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

interface SectionWithPhotosProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaFunction:()=>void;
  imageBack: string;
  imageFront: string;
  reverse?: boolean; // لو true: النص على الشمال والصور على اليمين
}

export default function SectionWithPhotos({
  title,
  subtitle,
  description,
  ctaText = "اكتشف المزيد",
  ctaFunction,
  imageBack,
  imageFront,
  reverse = false,
}: SectionWithPhotosProps) {
  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-20 ">
      <div
        className={`max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center  gap-10 ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* TEXT SIDE */}
        <div className="flex-1 space-y-5 text-[var(--primary)]">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">{title}</h2>

          {subtitle && (
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              {subtitle}
            </p>
          )}

          {description && (
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              {description}
            </p>
          )}

          {/* CTA BUTTON */}
          <button onClick={ctaFunction} className="mt-4 bg-[#002B5B] text-white px-6 py-3 rounded-xl flex items-center gap-3 text-base hover:bg-[#003b7a] transition-colors">
            {ctaText}
            <FaArrowRight className="text-white" />
          </button>
        </div>

        {/* IMAGES SIDE */}
        <div className="flex-1 relative flex justify-center">
          {/* IMAGE 1 - BACK */}
          <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <Image src={imageBack} alt="background" fill className="object-cover" />
          </div>

          {/* IMAGE 2 - FRONT */}
          <div
            className={`absolute bottom-[-20px] ${
              "right-[-20px]"
            } w-48 h-48 md:w-60 md:h-60 rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-white`}
          >
            <Image src={imageFront} alt="foreground" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
