"use client";
import { Song } from "@/types/types";
import SongItem from "./SongItem";
import { useUser } from "@/hooks/useUser";
import useAuthModal from "@/hooks/useAuthModal";
interface ContentsLibraryProps {
  songs: Song[];
}
const ContentsLibrary: React.FC<ContentsLibraryProps> = ({ songs }) => {
  const { onOpen } = useAuthModal();

  if (songs.length === 0) {
    return <h1 className="mt-4 text-neutral-400">No songs found</h1>;
  }

  return (
    <div className="grid grid-col-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4 ">
      {songs.map((song) => (
        <SongItem key={song.id} song={song} onClick={() => {}} />
      ))}
    </div>
  );
};

export default ContentsLibrary;
