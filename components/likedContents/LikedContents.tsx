"use client";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LibraryItem from "../sideBar/LibraryItem";
import LikeButton from "../searchContents/LikeButton";
import useAuthModal from "@/hooks/useAuthModal";

interface LikedContentsProps {
  songs: Song[];
}

const LikedContents: React.FC<LikedContentsProps> = ({ songs }) => {
  const router = useRouter();
  const { user, isLoading } = useUser();
  const { onOpen, isOpen } = useAuthModal();
  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
      onOpen();
      router.push("/liked");
      // in case the user does not log/sign in (usecase: for stubborn users)
      if (!user && isOpen) {
        router.push("/");
      }
    }
  }, [isLoading, user, router, songs.length, onOpen, isOpen]);

  if (songs.length === 0) {
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        No liked songs.
      </div>
    );
  }
  return (
    <div className="w-full flex flex-col gap-y-2 p-6">
      {songs.map((song) => (
        <div key={song.id} className="w-full flex items-center gap-x-4">
          <div className="flex-1">
            <LibraryItem song={song} onClick={() => {}} />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};

export default LikedContents;
