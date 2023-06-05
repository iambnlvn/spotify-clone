import Modal from "./Modal";
import useUploadModal from "@/hooks/useUploadModal";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../Input/Input";
import Button from "../header/Button";
import { toast } from "react-hot-toast";
import uniqid from "uniqid";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
const UploadModal = () => {
  const { isOpen, onClose } = useUploadModal();
  const [isLoading, setIsLoading] = useState(false);
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    },
  });

  const handleChange = (openState: boolean) => {
    if (!openState) {
      reset();
      onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      setIsLoading(true);
      const song = values.song[0];
      const image = values.image[0];

      if (!song) {
        toast.error("Please select a song");
        return;
      } else if (!image) {
        toast.error("Please select an image");
        return;
      }
      const songPrefix = `song-${values.title}`;
      const songUniqueID = uniqid(songPrefix);

      const { data: songData, error: songError } = await supabaseClient.storage
        .from("songs")
        .upload(`${songUniqueID}`, song, {
          contentType: "audio/mpeg",
        });
      if (songError) {
        setIsLoading(false);
        return toast.error("failed to upload song");
      }

      const imagePrefix = `image-${values.title}`;
      const imageUniqueID = uniqid(imagePrefix);
      const { data: imageData, error: imageError } =
        await supabaseClient.storage
          .from("images")
          .upload(`${imageUniqueID}`, image, {
            contentType: "image/*",
          });
      if (imageError) {
        setIsLoading(false);
        return toast.error("failed to upload image");
      }
      const { error: supabaseError } = await supabaseClient
        .from("songs")
        .insert({
          user_id: user?.id,
          title: values.title,
          author: values.author,
          image_path: imageData.path,
          song_path: songData.path,
        });

      if (supabaseError) {
        setIsLoading(false);
        return toast.error("failed to upload song");
      }

      router.refresh();
      setIsLoading(false);
      toast.success("Song uploaded successfully");
      reset();
      onClose();
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      title="Add a song"
      description="Upload your song to the cloud"
      isOpen={isOpen}
      onChange={handleChange}
    >
      <form
        className="flex flex-col gap-y-4 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          id="title"
          disabled={isLoading}
          {...register("title", { required: true })}
          placeholder="Title"
        />
        <Input
          id="author"
          disabled={isLoading}
          {...register("author", { required: true })}
          placeholder="Author"
        />
        <div>
          <h1 className="pb-1">Select a song</h1>
          <Input
            className="cursor-pointer"
            type="file"
            accept="audio/*"
            maxLength={1}
            size={160000000}
            id="song"
            disabled={isLoading}
            {...register("song", { required: true })}
          />
        </div>
        <div>
          <h1 className="pb-1">Select an image for the song</h1>
          <Input
            className="cursor-pointer"
            type="file"
            accept="image/*"
            maxLength={1}
            size={32000000}
            id="image"
            disabled={isLoading}
            {...register("image", { required: true })}
          />
        </div>
        <Button disabled={isLoading} type="submit">
          Create
        </Button>
      </form>
    </Modal>
  );
};

export default UploadModal;
