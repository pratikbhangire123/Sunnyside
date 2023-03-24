import useFont from "../utils/useFont";
import Image from "next/image";
import Link from "next/link";
import Logo2 from "../public/logo2.svg";
import Facebook from "../public/icon-facebook.svg";
import Instagram from "../public/icon-instagram.svg";
import Twitter from "../public/icon-twitter.svg";
import Pinterest from "../public/icon-pinterest.svg";
import SocialIcon from "./ui_components/socialIcon";

export default function Footer() {
  const [fontBarlow] = useFont();

  return (
    <footer className="grid grid-rows-2 p-14 items-center justify-items-center bg-darkmoderatecyan/70">
      <div>
        <Image src={Logo2} alt="sunnyside" height={27} className="block mx-auto" />
        <nav
          className={`flex mt-8 ${fontBarlow} text-sm font-semibold text-darkdesaturatedcyan/70`}
        >
          <Link href="/">
            <p className="mx-6 hover:text-white">About</p>
          </Link>
          <Link href="/">
            <p className="mx-6 hover:text-white">Services</p>
          </Link>
          <Link href="/">
            <p className="mx-6 hover:text-white">Projects</p>
          </Link>
        </nav>
      </div>
      <nav className="flex mt-14">
        <SocialIcon href="https://www.facebook.com/" src={Facebook} />
        <SocialIcon href="https://www.instagram.com/" src={Instagram} />
        <SocialIcon href="https://twitter.com/" src={Twitter} />
        <SocialIcon href="https://www.pinterest.com/" src={Pinterest} />
      </nav>
    </footer>
  );
}
