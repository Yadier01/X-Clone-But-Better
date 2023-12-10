import { cookies } from "next/headers";
import Main from "./components/UI/Main";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function Home() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const { data } = await supabase.from("tweetsss").select();
  return <Main singleTweetMode={false} data={data} supabase={supabase} />;
}
