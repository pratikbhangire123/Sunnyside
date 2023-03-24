import useFont from "../../utils/useFont";

export default function ServicesCard2(props) {
  const [fontBarlow, fontFraunces] = useFont();
  return (
    <div className="absolute inset-x-0 inset-y-[60%] sm:inset-y-[55%] flex flex-col px-8 py-12 sm:p-12 items-center">
      <h4 className={`${fontFraunces} font-black text-2xl ${props.color}`}>
        {props.title}
      </h4>
      <p
        className={`mt-6 sm:mx-28 text-center ${fontBarlow} text-sm font-semibold ${props.color}`}
      >
        {props.info}
      </p>
    </div>
  );
}
