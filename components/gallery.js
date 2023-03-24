import Image from "next/image";
import ConeDesktop from "../public/desktop/image-gallery-cone.jpg";
import MilkBottlesDesktop from "../public/desktop/image-gallery-milkbottles.jpg";
import OrangeDekstop from "../public/desktop/image-gallery-orange.jpg";
import SugarCubesDesktop from "../public/desktop/image-gallery-sugarcubes.jpg";
import ConeMobile from "../public/mobile/image-gallery-cone.jpg";
import MilkBottlesMobile from "../public/mobile/image-gallery-milkbottles.jpg";
import OrangeMobile from "../public/mobile/image-gallery-orange.jpg";
import SugarCubesMobile from "../public/mobile/image-gallery-sugar-cubes.jpg";
import useWindowSize from "../utils/useWindowSize";

export default function Gallery() {
  const [windwowSize] = useWindowSize();
  return (
    <section className="grid grid-cols-2 sm:grid-cols-4">
      <Image
        src={windwowSize?.outerWidth <= 640 ? ConeMobile : ConeDesktop}
        alt="cone"
        className="max-sm:order-2"
      />
      <Image
        src={
          windwowSize?.outerWidth <= 640 ? MilkBottlesMobile : MilkBottlesDesktop
        }
        alt="milkBottles"
        className="max-sm:order-first"
      />
      <Image
        src={windwowSize?.outerWidth <= 640 ? OrangeMobile : OrangeDekstop}
        alt="orange"
      />
      <Image
        src={
          windwowSize?.outerWidth <= 640 ? SugarCubesMobile : SugarCubesDesktop
        }
        alt="sugarCubes"
        className="max-sm:order-last"
      />
    </section>
  );
}
