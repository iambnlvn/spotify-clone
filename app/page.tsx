import getSongs from "@/actions/getSongs";
import ContentsLibrary from "@/components/contentsLibrary/ContentsLibrary";
import Header from "@/components/header/Header";
import Liked from "@/components/header/Liked";

export default async function Home() {
  const songs = await getSongs();

  return (
    <main className="h-full w-full bg-neutral-900 rounded-lg overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="text-white font-semibold text-3xl">Welcome back</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-4 gap-4">
            <Liked
              image="https://misc.scdn.co/liked-songs/liked-songs-300.png"
              name="Liked Songs"
              href="/liked"
            />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-2xl font-semibold">Newest songs</h1>
        </div>
        <ContentsLibrary songs={songs} />
      </div>
    </main>
  );
}
