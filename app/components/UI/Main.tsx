import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Tweets } from "../tweets";
import RightBar from "./RightBar";
import { cookies } from "next/headers";

export default function Main({ singleTweetMode, data, supabase }: any) {
  return (
    <main className="h-screen flex   ">
      <Tweets
        data={data}
        supabase={supabase}
        singleTweetMode={singleTweetMode}
      />
      <RightBar />
    </main>
  );
}
