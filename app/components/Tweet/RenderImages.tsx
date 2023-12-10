import { Images } from "../Images";

export const RenderImages = ({ images }: any) => {
  return (
    <div
      className={`grid overflow-hidden mt-2 w-full ${
        images.length > 1
          ? "grid-cols-2 rounded-lg max-w-[512px]"
          : "rounded-lg"
      }`}
    >
      {images.map((img: any, idx: any) => (
        <div key={idx} className="">
          <Images key={idx} idx={idx} src={img.img} className="w-full" />
        </div>
      ))}
    </div>
  );
};
