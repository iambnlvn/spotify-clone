import getLikedSongs from "@/actions/getLikedSongs";
import Header from "@/components/header/Header";
import LikedContents from "@/components/likedContents/LikedContents";
import Image from "next/image";

const revalidate = 0;

const page = async () => {
  const songs = await getLikedSongs();
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mt-20">
          <div className="flex flex-col md:flex-row items-center gap-x-5">
            <div className="h-32 w-32 relative lg:h-44 lg:w-44">
              <Image
                className="object-cover"
                src="https://misc.scdn.co/liked-songs/liked-songs-300.png"
                alt="Liked Songs"
                fill
              />
            </div>
            <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
              <p className="hidden md:block font-semibold text-sm">Playlist</p>
              <h1 className="text-4xl text-white sm:text-5xl lg:text-7xl font-bold">
                Liked songs
              </h1>
            </div>
          </div>
        </div>
      </Header>
      <LikedContents songs={songs} />
    </div>
  );
};

export default page;
