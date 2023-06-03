import ContentLibrary from "@/components/contentsLibrary/ContentsLibrary";
import Liked from "@/components/contentsLibrary/Liked";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <main className="h-full w-full bg-neutral-900 rounded-lg overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="text-white font-semibold text-3xl">Welcome back</h1>
          <ContentLibrary>
            <Liked
              image="https://misc.scdn.co/liked-songs/liked-songs-300.png"
              name="Liked Songs"
              href="/liked"
            />
          </ContentLibrary>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-2xl font-semibold">Newest songs</h1>
        </div>
        {/* Songs library */}
        <div></div>
      </div>
    </main>
  );
}
