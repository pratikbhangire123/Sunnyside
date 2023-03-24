import useFont from "../utils/useFont";
import Emily from "../public/image-emily.jpg";
import Thomas from "../public/image-thomas.jpg";
import Jennie from "../public/image-jennie.jpg";
import TestimonialCard from "./ui_components/testimonialCard";

export default function Testimonials() {
  const [, fontFraunces] = useFont();
  return (
    <section className="flex flex-col px-8 py-14 sm:p-28 items-center justify-center bg-white">
      <h4
        className={`${fontFraunces} text-center text-sm font-black text-grayishblue tracking-[0.3em]`}
      >
        CLIENT TESTIMONIALS
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6 mt-14">
        <TestimonialCard
          src={Emily}
          comment="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
          name="Emily R."
          designation="Marketing Director"
        />
        <TestimonialCard
          src={Thomas}
          comment="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
          name="Thomas S."
          designation="Chief Operating Officer"
        />
        <TestimonialCard
          src={Jennie}
          comment="Chief Operating Officer Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          name="Jennie F"
          designation="Business Owner"
        />
      </div>
    </section>
  );
}
