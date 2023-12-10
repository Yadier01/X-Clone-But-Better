import React from "react";
import { UserProfile } from "./UserProfile";
import Link from "next/link";

export const RenderUsername = ({
  id,
  username,
  ad,
  userpfp,
  className,
}: any) => {
  return (
    <div className={` ${className ? "fex flex-col" : "flex items-cxenter"}`}>
      <div className={`${className ? "" : "flex w-full gap-2"}`}>
        <p>{username}</p>
        <p className="text-xs self-center"> @{ad}</p>
        <Link
          href={`/status/${id}`}
          className={`w-full ${className ? "hidden" : " flex"}`}
        />
      </div>
    </div>
  );
};
