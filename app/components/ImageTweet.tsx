import { Images } from "./Images";

export const ImageTweet = async (rtTweet: any) => {
  const rtTW = rtTweet.rtTweet;
  return (
    <>
      {rtTW.map((rtTwt: any) => (
        <div
          className={` flex border pt-2 pl-2 ${rtTwt.text ? "flex-col" : ""}`}
        >
          <div className="flex gap-2 ">
            <p>
              {rtTwt.username} <span>{rtTwt.userad}</span>
            </p>
          </div>
          <div className="flex py-2  gap-2  ">
            <div
              className={`grid max-w-fit overflow-hidden  w-full ${
                rtTwt.img.length > 1 ? "grid-cols-2 rounded-lg  " : "rounded-lg"
              }  `}
            >
              {rtTwt.img.map((img: any, idx: any) => (
                <Images img={img.img} idx={idx} />
              ))}
            </div>
            <p className="w-full">{rtTwt.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};
