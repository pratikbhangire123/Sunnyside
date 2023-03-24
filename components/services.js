import Image from "next/image";
import TransformDesktop from "../public/desktop/image-transform.jpg";
import StandOutDesktop from "../public/desktop/image-stand-out.jpg";
import GraphicDesignDesktop from "../public/desktop/image-graphic-design.jpg";
import PhotographyDesktop from "../public/desktop/image-photography.jpg";
import TransformMobile from "../public/mobile/image-transform.jpg";
import StandoutMobile from "../public/mobile/image-stand-out.jpg";
import GraphicDesignMobile from "../public/mobile/image-graphic-design.jpg";
import PhotographyMobile from "../public/mobile/image-photography.jpg";
import ServicesCard from "./ui_components/servicesCard";
import ServicesCard2 from "./ui_components/serviceCard2";
import useWindowSize from "../utils/useWindowSize";

export default function Services() {
  const [windowSize] = useWindowSize();
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2">
      <ServicesCard
        title="Transform your brand"
        info="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
        href="/"
        decorationColor="yellow"
      />
      <Image
        src={windowSize?.outerWidth <= 640 ? TransformMobile : TransformDesktop}
        alt="transform"
        className="max-sm:order-first"
      />
      <Image
        src={windowSize?.outerWidth <= 640 ? StandoutMobile : StandOutDesktop}
        alt="standout"
      />
      <ServicesCard
        title="Stand out to the right audience"
        info="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
        href="/"
        decorationColor="softred"
      />
      <div className="relative">
        <Image
          src={
            windowSize?.outerWidth <= 640
              ? GraphicDesignMobile
              : GraphicDesignDesktop
          }
          alt="graphicdesign"
        />
        <ServicesCard2
          title="Graphic Design"
          info="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
          color="text-darkdesaturatedcyan"
        />
      </div>
      <div className="relative">
        <Image
          src={
            windowSize?.outerWidth <= 640
              ? PhotographyMobile
              : PhotographyDesktop
          }
          alt="photography"
        />
        <ServicesCard2
          title="Photography"
          info="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
          color="text-darkblue"
        />
      </div>
    </section>
  );
}
