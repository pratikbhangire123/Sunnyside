import Link from "next/link";
import useFont from "../../utils/useFont";

export default function ServicesCard(props) {
  const [fontBarlow, fontFraunces] = useFont();
  return (
    <div className="flex flex-col px-8 py-14 sm:p-28 justify-evenly bg-white">
      <h3
        className={`${fontFraunces} max-sm:text-center text-2xl sm:text-3xl font-black text-verydarkdesaturatedblue`}
      >
        {props.title}
      </h3>
      <p
        className={`${fontBarlow} max-sm:mt-5 max-sm:text-center text-sm font-semibold text-darkgrayishblue`}
      >
        {props.info}
      </p>
      <Link href={props.href}>
        <p
          className={`${fontFraunces} max-sm:mt-8 max-sm:text-center text-xs underline underline-offset-0 decoration-4 ${
            props.decorationColor == "yellow"
              ? "decoration-yellow/30 hover:decoration-yellow"
              : props.decorationColor == "softred"
              ? "decoration-softred/30 hover:decoration-softred"
              : ""
          }`}
        >
          LEARN MORE
        </p>
      </Link>
    </div>
  );
}
