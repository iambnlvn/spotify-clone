import { Song } from "@/types/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getSongsById = async (): Promise<Song[]> => {
  const supabase = createServerComponentClient({ cookies: cookies });
  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionError) {
    console.log(sessionError.message);
    return [];
  }

  const { data: songsData, error: songsError } = await supabase
    .from("songs")
    .select("*")
    .eq("user_id", sessionData.session?.user.id)
    .order("created_at", { ascending: false });
  if (songsError) {
    console.log(songsError.message);
    return [];
  }

  return (songsData as Song[]) || [];
};

export default getSongsById;
