import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types/types";
import Image from "next/image";

interface LibraryItemProps {
  song: Song;
  onClick: (id: string) => void;
}
const LibraryItem: React.FC<LibraryItemProps> = ({ song, onClick }) => {
  const imageUrl = useLoadImage(song);
  const handleClick = () => {
    if (onClick) {
      return onClick(song.id);
    }
    //   TODO: impelment play song
  };

  return (
    <div
      className="w-full p-2 rounded-md flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50"
      onClick={handleClick}
    >
      <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
        <Image
          src={imageUrl || ""}
          fill
          alt={song.title}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-[2px] overflow-hidden">
        <p className="truncate text-white">{song.title}</p>
        <p className="truncate text-neutral-400 text-sm">{song.author}</p>
      </div>
    </div>
  );
};

export default LibraryItem;
