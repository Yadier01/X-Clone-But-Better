import Link from "next/link";
import { Images } from "./Images";

export const ImageTweet = ({ rtTweet, data, bool }: any) => {
  return (
    <>
      {rtTweet.map((rtTwt: any) => (
        <div
          className={` flex border rounded-lg pt-2  ${
            rtTwt.text ? "flex-col" : ""
          }`}
        >
          <div
            className={`flex  pl-3  gap-2 ${
              data.img && data.img.length >= 1 ? "  " : ""
            } `}
          >
            <Images
              src={rtTwt.userPFP}
              width={20}
              className={"h-5 rounded-full w-full"}
            />
            <p>
              {rtTwt.username} <span>{rtTwt.userad}</span>
            </p>
          </div>
          <div
            className={`flex      ${
              data.img && data.img.length >= 1 ? " " : "flex-col-reverse"
            } `}
          >
            <div
              className={`grid  overflow-hidden  w-full ${
                rtTwt.img.length > 1 && data.img && data.img.length >= 1
                  ? "grid-cols-2 rounded-lg  max-w-fit"
                  : "rounded-lg grid-cols-2 w-full"
              }  `}
            >
              {rtTwt.img.map((img: any, idx: any) => (
                <div className="self-center ">
                  <Images
                    src={img.img}
                    idx={idx}
                    className={`${
                      data.img && data.img.length >= 1
                        ? " w-12  "
                        : "w-full  max-w-lg  max-h-[510px]"
                    } ${rtTwt.img.length > 1 ? "w-full " : "w-full rounded-lg"}
                    `}
                  />
                </div>
              ))}
            </div>
            <Link href={`/status/${rtTwt.id}`} className="w-full">
              <p className="w-full  h-full px-3 mt-2 mb-1">{rtTwt.text}</p>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};
