import Link from "next/link";

export const UserProfile = ({ userPfp }: any) => {
  return (
    <Link href={"/status"}>
      <img src={userPfp} alt="" className="rounded-full h-10 w-10 " />
    </Link>
  );
};
