import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Tweets } from "../tweets";
import RightBar from "./RightBar";
import { cookies } from "next/headers";

export default function Main({ isTweet, data, supabase }: any) {
  return (
    <main className="h-screen flex   ">
      <Tweets data={data} supabase={supabase} isTweet={true} />
      <RightBar />
    </main>
  );
}
