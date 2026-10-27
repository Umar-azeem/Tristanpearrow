"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Icon = ({ src, size = 20, className = "" }: { src: string; size?: number; className?: string }) => (
  <img src={src} width={size} height={size} className={className} alt="" />
);

const DEFAULT_DATA = {
  title: "Your Mortgage\nLoan Officer",
  subtitle: "Hi, I'm Tristan Pearrow",
  description: "A 4th generation Sunshine State native and dedicated mortgage loan officer, I hail from St. Augustine — the Nation's Oldest City — and studied at the University of Central Florida and the University of North Florida, where I earned my Bachelor's Degree. I currently live in St. Augustine with my two rescue dogs and cat. Licensed in Georgia, whether you're purchasing your first home, upgrading to accommodate an expanding family, or refinancing to obtain more favorable terms or remodeling funds, I'll ensure your best interests are at the heart of the loan solution I choose for you. My rock solid reputation is based upon integrity-based lending practices and a program portfolio that suits even the most challenging financing situations. From application through closing and every step along the way, you'll be confident in my truly simple, transparent, and award-winning process. I understand it's both my privilege and responsibility to earn your trust, and I'll never be satisfied until you are delighted with your experience.",
  image: "/img/tr.png",
};

const MortgageLandingPage = () => {
  const [data, setData] = useState(DEFAULT_DATA);

  const icons = {
    phone: "https://img.icons8.com/ios/50/ffffff/phone.png",
    facebook: "https://img.icons8.com/ios-filled/50/374151/facebook-new.png",
    instagram: "https://img.icons8.com/ios/50/374151/instagram-new.png",
    youtube: "https://img.icons8.com/ios-filled/50/374151/youtube-play.png",
    tiktok: "https://img.icons8.com/ios-filled/50/374151/tiktok.png",
  };

  useEffect(() => {
    fetch("/api/hero")
      .then((res) => res.json())
      .then((d) => {
        setData({
          title: d?.title?.trim() ? d.title : DEFAULT_DATA.title,
          subtitle: d?.subtitle?.trim() ? d.subtitle : DEFAULT_DATA.subtitle,
          description: d?.description?.trim() ? d.description : DEFAULT_DATA.description,
          image: d?.image?.trim() ? d.image : DEFAULT_DATA.image,
        });
      })
      .catch(() => setData(DEFAULT_DATA));
  }, []);

  return (
    <div className="">
      <div className="rounded-3xl bg-[#1470AF] text-white font-sans overflow-hidden relative">
        <main className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center px-4 sm:px-6 lg:px-8 pt-28 pb-20 gap-10">
          <div className="flex-1 max-w-2xl w-full text-center lg:text-left">
            <div className="hidden md:flex flex-col">
              <p className="text-md font-bold tracking-[0.2em] mb-6 uppercase">
                {data.subtitle}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 whitespace-pre-line">
                {data.title}
              </h1>
            </div>
            
            {/* Dynamic Description */}
            <p className="text-sm sm:text-base text-gray-200 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {data.description}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4">
              <Link href="/about">
                <button className="w-full sm:w-auto flex items-center border-2 border-white/30 justify-center gap-3 px-6 py-4 rounded-xl font-bold transition transform duration-300 hover:-translate-y-1">
                  Start Application
                  <img src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b0d_ic-arrow-forward-white.svg" alt="arrow" />
                </button>
              </Link>
              <a href="/contact-us">
                <button className="w-full sm:w-auto flex items-center bg-white text-black justify-center gap-3 px-6 py-4 rounded-xl font-semibold transition transform duration-300 hover:-translate-y-1">
                  Quick Contact
                </button>
              </a>
            </div>
          </div>

          <div className="flex-1 relative flex justify-center lg:justify-end items-end w-full">
            <div className="relative w-full max-w-[450px]">
              <div className="flex flex-col text-center p-1 md:hidden">
                <p className="text-md font-bold tracking-[0.2em] mb-2 uppercase">
                  {data.subtitle}
                </p>
                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-24 whitespace-pre-line">
                  {data.title}
                </h1>
              </div>
              
              <img
                src={data.image}
                alt="Tristan Pearrow"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = DEFAULT_DATA.image;
                }}
                className="w-full h-[400px] sm:h-[580px] lg:h-[550px] object-cover object-top rounded-2xl"
                style={{
                  maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                }}
              />

              <div className="absolute -bottom-6 sm:bottom-10 right-0 md:right-22 left-0 sm:left-auto mx-auto sm:mx-0 bg-white text-gray-900 p-5 sm:p-6 rounded-2xl shadow-2xl w-[60%] sm:w-72">
                <h3 className="text-xl font-bold mb-2">Tristan Pearrow</h3>
                <p className="text-gray-600 text-sm mb-1">Mortgage Loan Officer</p>
                <p className="text-gray-500 text-xs mb-1">NMLS ID: 1878186</p>
                <div className="flex items-center gap-3 w-full">
                  <a href="https://www.facebook.com/loanswithtristan" className="w-9 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
                    <Icon src={icons.facebook} size={18} />
                  </a>
                  <a href="http://instagram.com/loanwolfmoney" className="w-9 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
                    <Icon src={icons.instagram} size={18} />
                  </a>
                  <a href="https://www.youtube.com/@loanwolfmoney" className="w-9 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
                    <Icon src={icons.youtube} size={18} />
                  </a>
                  <a href="https://www.tiktok.com/@loanwolfmoney" className="w-9 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
                    <Icon src={icons.tiktok} size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MortgageLandingPage;