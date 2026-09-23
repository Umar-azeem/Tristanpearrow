"use client";
import Image from "next/image";
import Link from "next/link";

interface SocialIcon {
  id: string;
  src: string;
  alt: string;
  url: string;
}

const Loan: React.FC = () => {
  const socialIcons: SocialIcon[] = [
    {
      id: "facebook",
      src: "https://api.iconify.design/uim:facebook-f.svg?color=%23E46A52",
      alt: "Facebook",
      url: "https://www.facebook.com/loanswithtristan",
    },
    {
      id: "instagram",
      src: "https://api.iconify.design/uim:instagram.svg?color=%23E46A52",
      alt: "Instagram",
      url: "http://instagram.com/loanwolfmoney",
    },
    {
      id: "youtube",
      src: "https://api.iconify.design/simple-icons:youtube.svg?color=%23E46A52",
      alt: "YouTube",
      url: "https://www.youtube.com/@loanwolfmoney",
    },
    {
      id: "tiktok",
      src: "https://api.iconify.design/simple-icons:tiktok.svg?color=%23E46A52",
      alt: "TikTok",
      url: "https://www.tiktok.com/@loanwolfmoney",
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
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={20}
                  height={20}
                  className="w-5 h-5 group-hover:brightness-0 text-[#1470AF] group-hover:invert transition-all"
                  unoptimized
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loan;