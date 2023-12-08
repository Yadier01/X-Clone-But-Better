"use client";
import Image from "next/image";
import { useState } from "react";
export const Images = ({ img, idx }: any) => {
  const [tweet, setTweets] = useState([]);
  return (
    <>
      <Image
        onClick={() => console.log(idx)}
        src={img}
        width={40}
        height={40}
        className="w-10 h-10"
        alt={""}
        quality={100}
      />
    </>
  );
};
