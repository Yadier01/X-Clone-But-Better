import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
export const Images = ({ src, idx, className, width }: any) => {
  return (
    <Link href={`/status/${2}/img/${idx}`} className="w-max">
      <img src={src} className={className} alt={""} />
    </Link>
  );
};
