"use client";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { set } from "react-hook-form";
import { toast } from "react-hot-toast";

interface LikeButtonProps {
  songId: string;
}
const LikeButton: React.FC<LikeButtonProps> = ({ songId }) => {
  const { supabaseClient } = useSessionContext();
  const { onOpen } = useAuthModal();
  const { user } = useUser();
  const router = useRouter();
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (!user?.id) return;

    const fetchLiked = async () => {
      const { data, error } = await supabaseClient
        .from("liked_songs")
        .select("*")
        .eq("user_id", user.id)
        .eq("song_id", songId)
        .single();

      if (!error && data) {
        setLiked(true);
      }
    };
    fetchLiked();
  }, [songId, user?.id, supabaseClient]);

  const Icon = liked ? AiFillHeart : AiOutlineHeart;
  const handleLike = async () => {
    if (!user?.id) {
      return onOpen();
    }
    if (liked) {
      const { error } = await supabaseClient
        .from("liked_songs")
        .delete()
        .eq("user_id", user.id)
        .eq("song_id", songId);

      error ? toast.error(error.message) : setLiked(false);
    } else {
      const { error } = await supabaseClient
        .from("liked_songs")
        .insert({ user_id: user.id, song_id: songId });

      if (error) {
        toast.error(error.message);
      } else {
        setLiked(true);
        toast.success("Added to your library!");
      }
    }
    router.refresh();
  };
  return (
    <button onClick={handleLike} className="hover-opacity-75 transition">
      <Icon color={liked ? "#22c55e" : "white"} size={25} />
    </button>
  );
};

export default LikeButton;
