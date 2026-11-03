"use client";
import Image from "next/image";
import Link from "next/link";

interface SocialIcon {
  id: string;
  alt: string;
  url: string;
  // SVG path data for Font Awesome icons
  path: string;
  viewBox: string;
}

const Loan: React.FC = () => {
  const socialIcons: SocialIcon[] = [
    {
      id: "facebook",
      alt: "Facebook",
      url: "https://www.facebook.com/loanswithtristan",
      viewBox: "0 0 320 512",
      path: "M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z",
    },
    {
      id: "instagram",
      alt: "Instagram",
      url: "http://instagram.com/loanwolfmoney",
      viewBox: "0 0 448 512",
      path: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
    },
    {
      id: "youtube",
      alt: "YouTube",
      url: "https://www.youtube.com/@loanwolfmoney",
      viewBox: "0 0 576 512",
      path: "M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z",
    },
    {
      id: "tiktok",
      alt: "TikTok",
      url: "https://www.tiktok.com/@loanwolfmoney",
      viewBox: "0 0 448 512",
      path: "M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-12 px-4 sm:py-16 sm:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div className="text-center lg:text-left">
          <p className="text-[#1470AF] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold mb-4 text-sm sm:text-base">
            A Team You Can Trust
          </p>

          <h1 className="text-3xl sm:text-4xl font-semibold leading-tight text-gray-900">
            Meet Tristan Pearrow,
          </h1>

          <p className="mt-6 sm:mt-8 text-gray-800 text-sm sm:text-md leading-relaxed max-w-xl mx-auto lg:mx-0">
            I{`'`}m Tristan Pearrow, a 4th generation Sunshine State native and
            dedicated mortgage loan officer. I hail from St. Augustine, the
            Nation{`'`}s Oldest City, and studied at the University of Central
            Florida and the University of North Florida where I earned my
            Bachelors Degree. I currently live in St. Augustine with my two
            rescue dogs and cat. Whether you{`'`}re purchasing your first home,
            upgrading to accommodate an expanding family, building your real
            estate portfolio - or refinancing to obtain more favorable terms or
            remodeling funds, I{`'`}ll ensure your best interests are at the heart
            of the loan solution I{`'`}ll choose for you.
          </p>

          <Link href="/about">
            {" "}
            <button
              className="mt-8 sm:mt-10 inline-flex items-center gap-3 bg-[#1470AF] hover:bg-[#1470AF]/80 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition mx-auto lg:mx-0"
              type="button"
            >
              About me
            </button>
          </Link>
        </div>
        <div className="flex  flex-col justify-center items-center mt-16 sm:mt-20 lg:mt-0">
          <div className="w-full relative ">
            <div className="flex absolute flex-col items-end gap-1.5 top-36 left-52">
              <div className="flex lg:hidden flex-col items-start gap-1 ">
                <div className="h-4 w-4 bg-white rounded-full" />
                <div className="h-3 w-3 bg-white rounded-full" />
                <div className="h-2 w-2 bg-white rounded-full" />
                <div className="h-1 w-1 bg-white rounded-full" />
              </div>
            </div>
            <div className="w-full max-w-[400px] md:max-w-[500px] aspect-[4/5]  md:h-[550px] bg-[#1470AF] rounded-[20px]" />
            <Image
              src="/img/tr.png"
              alt="Advisor"
              width={480}
              height={680}
              className="absolute -bottom-[10px] h-[60%] bottom-[2px]  w-full max-w-[550px] object-contain object-bottom sm:h-[500px] sm:w-[550px] rounded-[20px]"
              priority
              unoptimized
            />
            <div className="md:hidden  absolute top-6 md:bottom-1 md:top-40 left-42 -translate-x-1/2 sm:left-20 sm:translate-x-0  sm:top-1/2 sm:-translate-y-1/2 bg-white rounded-[24px] sm:rounded-[30px] border-white shadow-4xl p-5 sm:p-8 w-[68%] sm:w-[300px]">
              <h3 className="text-lg sm:text-xl font-bold text-black">
                Tristan Pearrow
              </h3>
              <p className="text-gray-800 mt-2 text-xs">Mortgage Loan Officer</p>

              <p className="text-gray-800 text-xs mt-2">NMLS ID: 1878186</p>
            </div>
          </div>
          <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 ">
            {socialIcons.map((icon) => (
              <a
                key={icon.id}
                href={icon.url}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full text-[#1470AF] border border-[#1470AF] flex items-center justify-center hover:bg-[#1470AF] transition group"
                aria-label={icon.alt}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="[&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-[#1470AF] group-hover:[&>svg]:fill-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox={icon.viewBox}
                  >
                    <path d={icon.path} />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loan;