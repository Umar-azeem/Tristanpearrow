import Link from "next/link";
import Image from "next/image";

const FooterText = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1c1c1c] text-white px-4 sm:px-6 py-6 text-[14px] sm:text-[16px] leading-6">
      <div>
        <hr className="border-gray-700 my-6 sm:my-10" />
        <p>
          My team and I would love to help you get into a new home. Please
          utilize the links below and contact our office if you have any
          questions. We have helped thousands of individuals and families within
          the Central Valley, and would love to help you, too…
        </p>

        <p className="mt-6">For Licensing Information go to:</p>

        <p className="mt-6">
          © {currentYear} Tristan.net. | All Rights Reserved. Tristan
          Pearrow NMLS# 1878186 & Gold Standard Mortgage NMLS # 1878186
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
