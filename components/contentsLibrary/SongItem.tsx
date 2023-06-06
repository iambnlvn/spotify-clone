"use client";
import useLoadImage from "@/hooks/useLoadImage";
import useLoadSong from "@/hooks/useLoadSong";
import { Song } from "@/types/types";
import Image from "next/image";
import PlayButton from "./PlayButton";

interface SongItemProps {
  song: Song;
  onClick: () => void;
}
const SongItem: React.FC<SongItemProps> = ({ song, onClick }) => {
  const imagePath = useLoadImage(song);
  return (
    <div className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition py-3">
      <div className="w-full flex justify-center h-full aspect-square relative rounded-md overflow-hidden">
        <Image
          className="object-cover"
          src={imagePath || ""}
          alt={song.title}
          fill
        />
      </div>
      <div className="w-full pt-4 flex flex-col px-2 items-start gap-y-1">
        <p className="font-semibold truncate w-full">{song.title}</p>
        <p className="text-neutral-400 text-sm pb-4 w-full truncate">
          {song.author}
        </p>
      </div>
      <div className="absolute bottom-20 right-5">
        <PlayButton />
      </div>
    </div>
  );
};

export default SongItem;
