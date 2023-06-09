"use client";
import { Song } from "@/types/types";
import LibraryItem from "@/components/sideBar/LibraryItem";
import LikeButton from "./LikeButton";

interface SearchContentProps {
  songs: Song[];
}

const SearchContent: React.FC<SearchContentProps> = ({ songs }) => {
  if (songs.length === 0) {
    return (
      <div className="w-full flex items-center flex-col gap-y-2 px-6 text-neutral-400 text-2xl">
        No songs found.
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-y-2 px-6">
      {songs.map((song) => (
        <div className="w-full flex items-center gap-x-4" key={song.id}>
          <div className="flex-1">
            <LibraryItem song={song} onClick={() => {}} />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};

export default SearchContent;
