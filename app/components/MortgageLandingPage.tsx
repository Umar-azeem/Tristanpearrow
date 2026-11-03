// MortgageLandingPage.tsx
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const DEFAULT_DATA = {
  title: "Your Mortgage\nLoan Officer",
  subtitle: "Hi, I'm Tristan Pearrow",
  description: "Whether you're buying your first home, refinancing, or investing in real estate, I'm here to make the mortgage process simple, transparent, and stress-free.",
  image: "/img/tr.png",
};

const MortgageLandingPage = () => {
  const [data, setData] = useState(DEFAULT_DATA);

  useEffect(() => {
    fetch("/api/hero")
      .then((res) => res.json())
      .then((d) => {
        // ✅ If the API data is empty/missing, fall back to DEFAULT_DATA
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
            <p className="text-sm sm:text-base text-gray-200 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed whitespace-pre-line">
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
                
                {/* ✅ FIXED: Replaced Lucide icons with Font Awesome SVG icons from TW Elements */}
                <div className="flex items-center gap-3 w-full mt-2">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/loanswithtristan"
                    aria-label="Facebook"
                    className="w-9 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                  >
                    <span className="[&>svg]:h-5 [&>svg]:w-5">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 320 512">
    <path
      d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
  </svg>
</span>
                  </a>

                  {/* Instagram */}
                  <a
                    href="http://instagram.com/loanwolfmoney"
                    aria-label="Instagram"
                    className="w-9 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                  >
                    <span className="[&>svg]:h-5 [&>svg]:w-5">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 448 512">
    <path
      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
  </svg>
</span>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/@loanwolfmoney"
                    aria-label="YouTube"
                    className="w-9 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                  >
                    <span className="[&>svg]:h-5 [&>svg]:w-5">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 576 512">
    <path
      d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
  </svg>
</span>
                  </a>

                  {/* TikTok */}
                  <a
                    href="https://www.tiktok.com/@loanwolfmoney"
                    aria-label="TikTok"
                    className="w-9 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                  >
                    <span className="[&>svg]:h-5 [&>svg]:w-5">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 448 512">
    <path
      d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
  </svg>
</span>
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