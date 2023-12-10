import React from "react";

export default function Img({ params }: { params: { img: number } }) {
  return <div>{params.img}</div>;
}
