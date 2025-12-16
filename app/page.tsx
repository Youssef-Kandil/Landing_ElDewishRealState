"use client";

import { urls } from "./Configs/urls";


import Image from "next/image";
import { FaStore, FaCarSide } from "react-icons/fa";
import { BiExpand } from "react-icons/bi";
import { GiJugglingSeal } from "react-icons/gi";


import InfoSection from "./components/InfoSection/InfoSection";
import SectionWithPhotos from "./components/SectionWithPhotos/SectionWithPhotos";
import GallerySection from "./components/GallerySection/GallerySection";

export default function Home() {


  const cards = [
    {
      icon: <FaStore className="text-[#D28726] text-4xl mb-3" />,
      text: "خدمات متكاملة",
    },
    {
      icon: <FaCarSide className="text-[#D28726] text-4xl mb-3" />,
      text: "مواقف مجهزة مع شواحن كهربائية",
    },
    {
      icon: <GiJugglingSeal className="text-[#D28726] text-4xl mb-3" />,
      text: "إطلالة بحرية ساحرة",
    },
    {
      icon: <BiExpand className="text-[#D28726] text-4xl mb-3" />,
      text: "مساحات تبدأ من 200 م²",
    },
  ];

  return (
    <div>
      <section className="relative w-full">
        {/* Background Image */}
        <div className="w-full h-[80vh] relative">
          <Image
            src="/images/bg1.jpeg"
            alt="hero"
            fill
            className=" hidden md:block object-cover object-[center_25%]"
            priority
          />
          {/* Mobile */}
            <Image
              src="/images/bg2.png"
              alt="hero"
              fill
              priority
              className="block md:hidden object-cover object-center"
            />
        </div>

        {/* Cards */}
        {/* <div className="absolute left-1/2 bottom-12 transform -translate-x-1/2 w-full px-4 max-[635px]:relative"> */}
        <div className="absolute left-1/2 bottom-12 transform -translate-x-1/2 w-full px-4 max-[635px]:relative max-[635px]:bottom-0 ">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {cards.map((box, i) => (
              <div
                key={i}
                className="
                  bg-white text-black p-6 rounded-2xl shadow-lg 
                  flex flex-col justify-center items-center text-center
                "
              >
                {box.icon}
                <p className="font-semibold text-lg">{box.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Space below to allow boxes to appear */}
        <div className="h-40 "></div>

      </section>

      <InfoSection 
        title="موقع متميز علي شواطئ مدينة الخبر" 
        subtitle="استمتع بموقع استراتيجي متميز بالقرب من المولات و الفنادق ، و الخدمات الصحية مع سهولة الوصول للكورنيش و اماكن الترفيه للعائلة" image="/images/map.jpeg" 
        ctaText="احجز وحدتك الان" ctaLink={urls?.whatsapp??"#"} />

        <SectionWithPhotos  ctaFunction={() => urls?.whatsapp && (window.location.href = urls.whatsapp)}  title="اطلالة بحرية ساحرة" subtitle="استمتع باطلالة بحرية ساحرة علي شواطئ مدينة الخبر" description="استمتع بافضل اطلالة ساحلية بجانب جراند مول و جسر الملك فهد" imageFront="/images/blue.jpeg" imageBack="/images/bg1.jpeg"/>
        <SectionWithPhotos  ctaFunction={() => urls?.whatsapp && (window.location.href = urls.whatsapp)}  reverse title="مقابل جراند مول" subtitle=" الذي سيفتتح قريبآ" description="استمتع بمول يجمع بين التسوق و الترفيه و الخدمات المتنوعة مع اماكن استراحة مريحة لجميع افراد العائلة و الزوار" imageFront="/images/Gallery/exteriorImages/ex3.png" imageBack="/images/Gallery/exteriorImages/ex5.png"/>
        <SectionWithPhotos  ctaFunction={() => urls?.whatsapp && (window.location.href = urls.whatsapp)}   title="انظمة دخول ذكي و كاميرات مراقبة" subtitle="الراحة و الامان لك و لعائلتك" description="المبنى بالقرب من مستشفيات صيدليات معامل طبية ، مدارس و مرافق تعليمية حديثة لتضمن رعاية صحية و تعليمية متكاملة لجميع افراد عائلتك" imageFront="/images/cam1.jpeg" imageBack="/images/smartlock.webp"/>
        <SectionWithPhotos  ctaFunction={() => urls?.whatsapp && (window.location.href = urls.whatsapp)}  reverse title="مساحات و تصاميم فاخرة" subtitle="راحة و فخامة في كل زاوية" description="تبدأ المساحات من 200م بتصاميم داخلية و خارجية فاخرة" imageFront="/images/Gallery/interiorImages/3.jpeg" imageBack="/images/Gallery/interiorImages/7.jpeg"/>
        <SectionWithPhotos  ctaFunction={() => urls?.whatsapp && (window.location.href = urls.whatsapp)}  title="مواقف حديثة مجهزة" subtitle="بشواحن كهربائية و ضاغط الهواء" description="موقف خاص بسيارتك مجهز باحدث الشواحن الكهربائية و ضاغط الهواء" imageFront="/images/car.webp" imageBack="/images/bg1.jpeg"/>

        <GallerySection 
          title="صور المشروع" 
          subtitle="استكشف المشروع" 
          interiorImages={[
            "/images/Gallery/interiorImages/1.jpeg",
            "/images/Gallery/interiorImages/2.jpeg",
            "/images/Gallery/interiorImages/3.jpeg",
            "/images/Gallery/interiorImages/4.jpeg",
            "/images/Gallery/interiorImages/5.jpeg",
            "/images/Gallery/interiorImages/6.jpeg",
            "/images/Gallery/interiorImages/7.jpeg",
            "/images/Gallery/interiorImages/8.jpeg",
            "/images/Gallery/interiorImages/9.jpeg",
            "/images/Gallery/interiorImages/10.jpeg",
          ]} 
          exteriorImages={[
            "/images/Gallery/exteriorImages/ex1.png",
            "/images/Gallery/exteriorImages/ex2.png",
            "/images/Gallery/exteriorImages/ex3.png",
            "/images/Gallery/exteriorImages/ex4.png",
            "/images/Gallery/exteriorImages/ex5.png",
            "/images/Gallery/exteriorImages/ex6.png",
            "/images/Gallery/exteriorImages/ex7.png",
            "/images/Gallery/exteriorImages/ex8.png",
            "/images/Gallery/exteriorImages/ex9.png",
            "/images/Gallery/exteriorImages/ex10.png",
            "/images/Gallery/exteriorImages/ex11.png",
            "/images/Gallery/exteriorImages/ex12.png",
            "/images/Gallery/exteriorImages/ex13.png",
          ]} />

    </div>
  );
}

