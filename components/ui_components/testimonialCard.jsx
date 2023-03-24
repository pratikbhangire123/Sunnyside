import Image from "next/image";
import useFont from "../../utils/useFont";

export default function TestimonialCard(props) {
  const [fontBarlow, fontFraunces] = useFont();
  return (
    <div className="grid grid-rows-3 gap-10 items-center justify-items-center">
      <Image
        src={props.src}
        alt={props.name}
        width={60}
        className="rounded-full"
      />
      <p className={`text-center ${fontBarlow} text-sm font-semibold text-verydarkgrayishblue`}>
        {props.comment}
      </p>
      <div>
        <p
          className={`text-center ${fontFraunces} font-black text-verydarkdesaturatedblue`}
        >
          {props.name}
        </p>
        <p
          className={`mt-2 text-center ${fontBarlow} text-xs text-grayishblue`}
        >
          {props.designation}
        </p>
      </div>
    </div>
  );
}
