import Link from "next/link";
import Image from "next/image";

const FooterText = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1c1c1c] text-white px-4 sm:px-6 py-6 text-[14px] sm:text-[16px] leading-6">
      <div>
        <hr className="border-gray-700 my-6 sm:my-10" />
        <p>
           I'm a 4th generation Sunshine State native and dedicated mortgage
              loan officer. I hail from St. Augustine, the Nation{`'`}s Oldest City,
              and studied at the University of Central Florida and the
              University of North Florida where I earned my Bachelors Degree. I
              currently live in St. Augustine with my two rescue dogs and cat.
        </p>

        <p className="mt-6">For Licensing Information go to:</p>

        <p className="mt-6">
          © {currentYear} Tristan.net. | All Rights Reserved. Tristan Pearrow
          NMLS# 1878186 & Geneva financial NMLS # 1878186
        </p>
      </div>

      <hr className="border-gray-700 my-6 sm:my-10" />
      <div className="flex justify-end mt-4 sm:mt-0">
        <Image
          src="/img/logo.png"
          alt="Equal Housing Opportunity"
          width={100}
          height={100}
          className="w-18 sm:w-32 h-auto"
          unoptimized
        />
      </div>
    </footer>
  );
};

export default FooterText;
