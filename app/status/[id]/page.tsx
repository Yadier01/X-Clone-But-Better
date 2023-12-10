import Main from "@/app/components/UI/Main";
import RightBar from "@/app/components/UI/RightBar";
import { Tweets } from "@/app/components/tweets";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";

export default async function Id({ params }: { params: { id: number } }) {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  let { data: tweetsss, error } = await supabase
    .from("tweetsss")
    .select("*")
    .eq("id", params.id);
  return (
    <div className="w-full">
      <div className="flex gap-10">
        <Link href={"/"}>back</Link>
        <p>Post</p>
      </div>
      <div className="w-full">
        <Main singleTweetMode={true} data={tweetsss} supabase={supabase} />;
      </div>
    </div>
  );
}
