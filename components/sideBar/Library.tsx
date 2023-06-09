import { VscLibrary } from "react-icons/vsc";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthModal from "@/hooks/useAuthModal";
import useUploadModal from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types/types";
import LibraryItem from "./LibraryItem";

interface LibraryProps {
  songs: Song[];
}
const Library: React.FC<LibraryProps> = ({ songs }) => {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const { user } = useUser();
  const handleClick = () => {
    if (!user) {
      return authModal.onOpen();
    }
    return uploadModal.onOpen();
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-4 pt-4">
        {/* TODO: group the div and add animate-pulse while playing from the user's library */}
        <div className="group inline-flex items-center gap-x-2 ">
          <VscLibrary
            className="text-neutral-400 group-hover:text-white group-hover:cursor-pointer"
            size={26}
          />
          <p className="text-neutral-400 font-medium text-md group-hover:text-white group-hover:cursor-pointer">
            My Library
          </p>
        </div>
        <AiOutlinePlus
          onClick={handleClick}
          size={20}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3 overflow-y-auto">
        {songs.map((song) => (
          <LibraryItem key={song.id} song={song} onClick={() => {}} />
        ))}
      </div>
    </div>
  );
};

export default Library;
