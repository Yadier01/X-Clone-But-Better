import { ImageTweet } from "./ImageTweet";

export const Tweet = async ({ data, supabase }: any) => {
  let { data: tweet, error } = await supabase
    .from("tweetsss")
    .select("*")
    .eq("id", 2);
  return (
    <div className="bg-black max-w-[566px] border-b p-4 flex -[368px] text-white">
      <div className="flex  flex-col ">
        {data.map((e: any) => (
          <div className="" key={e.id}>
            <div className="flex gap-2  ">
              {/* user pfp */}

              <img src={e.userPFP} alt="" className="rounded-full h-10 w-10" />
              <div>
                <p className="flex gap-2">
                  {e.username}
                  <span>{e.userad}</span>
                </p>

                <h2>{e.text}</h2>
                {/* user posted images */}
                <div
                  className={`grid max-w-fit overflow-hidden  w-full ${
                    e.img.length > 1 ? "grid-cols-2 rounded-lg  " : "rounded-lg"
                  }  `}
                >
                  {e.img.map((img: any, idx: any) => (
                    <img key={idx} src={img.img} alt="" className="" />
                  ))}
                </div>
                {e.retweetedID && <ImageTweet rtTweet={tweet} data={e} />}
              </div>
            </div>

            <div className="flex justify-between">
              <p>ls</p>
              <p>ls</p>
              <p>ls</p>
              <p>ls</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
