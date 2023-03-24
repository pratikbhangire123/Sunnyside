import { Barlow, Fraunces } from "next/font/google";

const barlow = Barlow({ subsets: ["latin"], weight: ["500", "600", "900"] });
const fraunces = Fraunces({ subsets: ["latin"], weight: ["700", "900"] });

export default function useFont() {
  const fontBarlow = barlow.className;
  const fontFraunces = fraunces.className;
  return [fontBarlow, fontFraunces];
}
