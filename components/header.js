import Image from "next/image";
import Logo from "../public/logo.svg";
import Hamburger from "../public/icon-hamburger.svg";
import ArrowDown from "../public/icon-arrow-down.svg";
import HeaderMobile from "../public/mobile/image-header.jpg";
import HeaderDesktop from "../public/desktop/image-header.jpg";
import Link from "next/link";
import useFont from "../utils/useFont";
import { useState } from "react";
import useWindowSize from "../utils/useWindowSize";

const [fontBarlow, fontFraunces] = useFont();

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowSize] = useWindowSize();

  return (
    <header className="relative">
      <Image
        src={windowSize?.outerWidth <= 640 ? HeaderMobile : HeaderDesktop}
        alt="headerImage"
      />
      <div className="absolute left-0 top-0 w-full flex items-center justify-between px-5 sm:px-10 py-8">
        <div>
          <Image
            src={Logo}
            alt="sunnyside"
            height={windowSize?.outerWidth <= 640 ? 20 : 30}
          />
        </div>
        <Image
          src={Hamburger}
          alt="hamburger"
          width={20}
          onClick={() => setMobileMenuOpen((value) => !value)}
          className="sm:hidden cursor-pointer"
        />
        {mobileMenuOpen && <MobileMenu />}
        <DesktopMenu />
      </div>
      <div className="absolute inset-x-0 inset-y-36 sm:inset-y-44 flex flex-col items-center">
        <h2
          className={`mb-14 sm:mb-20 ${fontFraunces} text-center text-4xl sm:text-5xl tracking-[0.2em] text-white`}
        >
          WE ARE CREATIVES
        </h2>
        <Image src={ArrowDown} alt="downArrow" />
      </div>
    </header>
  );
}

function MobileMenu() {
  return (
    <nav className="absolute inset-x-0 inset-y-28 z-50 h-fit flex flex-col mx-5 p-8 items-center text-lg font-semibold text-darkgrayishblue bg-white border border-grayishblue/20">
      <Link href="/">
        <p className="my-4">About</p>
      </Link>
      <Link href="/">
        <p className="my-4">Services</p>
      </Link>
      <Link href="/">
        <p className="my-4">Projects</p>
      </Link>
      <Link href="/">
        <p
          className={`my-4 px-6 py-3 ${fontFraunces} text-sm text-verydarkdesaturatedblue hover:text-white bg-yellow hover:bg-white/30 rounded-full`}
        >
          CONTACT
        </p>
      </Link>
    </nav>
  );
}

function DesktopMenu() {
  return (
    <nav className={`max-sm:hidden flex items-center ${fontBarlow} text-white`}>
      <Link href="/">
        <p className="mr-4 hover:text-verydarkdesaturatedblue">About</p>
      </Link>
      <Link href="/">
        <p className="mx-4 hover:text-verydarkdesaturatedblue">Services</p>
      </Link>
      <Link href="/">
        <p className="mx-4 hover:text-verydarkdesaturatedblue">Projects</p>
      </Link>
      <Link href="/">
        <p
          className={`ml-4 px-6 py-3 ${fontFraunces} text-sm text-verydarkdesaturatedblue hover:text-white bg-white hover:bg-white/30 rounded-full`}
        >
          CONTACT
        </p>
      </Link>
    </nav>
  );
}
