import Image from "next/image";
import Link from "next/link";

export default function SocialIcon(props) {
  return (
    <Link href={props.href}>
      <Image
        src={props.src}
        alt={props.src}
        width={15}
        className={`mx-3 hover:${props.src.fill}`}
      />
    </Link>
  );
}
