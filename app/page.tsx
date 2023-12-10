import Image from "next/image";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { Tweets } from "./components/tweets";

export default async function Home() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const { data } = await supabase.from("tweetsss").select();
  return (
    <main className="h-screen   ">
      <div className="flex bg-red-400  items-stretch justify-between w-full h-full ">
        <div className="bg-yellow-400 grow-[2] hidden md:flex ">leftbar</div>
        <div className="bg-zinc-400 grow-[3] lg:flex  lg:justify-between ">
          <Tweets data={data} supabase={supabase} className={false} />
          <div className="hidden md:flex">riight bar</div>
        </div>
      </div>
    </main>
  );
}
