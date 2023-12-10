import { Tweets } from "@/app/components/tweets";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
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
        <p>back</p>
        <p>Post</p>
      </div>
      <div className="w-full">
        <Tweets supabase={supabase} data={tweetsss} className={true} />
      </div>
    </div>
  );
}
