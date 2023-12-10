import Link from "next/link";
import { Images } from "./Images";
import { ImageTweet } from "./ImageTweet";
import { UserProfile } from "./Tweet/UserProfile";
import { TweetFooter } from "./Tweet/TweetFooter";
import { RenderImages } from "./Tweet/RenderImages";
import { TweetHeader } from "./Tweet/TweetHeader";

export const Tweets = async ({ data, supabase, singleTweetMode }: any) => {
  const { data: tweet, error } = await supabase
    .from("tweetsss")
    .select("*")
    .eq("id", 2);

  const renderTweet = (e: any) => (
    <div
      className="bg-black max-w-[598px] border-b p-3 flex text-white"
      key={e.id}
    >
      <div
        className={`overflow-hidden w-12 ${
          singleTweetMode ? "hidden" : "flex flex-col"
        }`}
      >
        {singleTweetMode ? "" : <UserProfile userPfp={e.userPFP} />}

        <Link
          href={"/status/2"}
          className={`h-full w-full ${singleTweetMode ? "hidden" : "flex"}`}
        >
          <div className="w-full h-full"></div>
        </Link>
      </div>
      <div className="flex flex-col w-full">
        <TweetHeader e={e} singleTweetMode={singleTweetMode} />
        <RenderImages images={e.img || []} />
        {e.retweetedID && <ImageTweet rtTweet={tweet} data={e} />}
        <TweetFooter />
      </div>
    </div>
  );

  return <div>{data.map((e: any) => renderTweet(e))}</div>;
};
