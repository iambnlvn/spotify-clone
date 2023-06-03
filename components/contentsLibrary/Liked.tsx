"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";

interface LikedProps {
  name: string;
  href: string;
  image: string;
}
const Liked: React.FC<LikedProps> = ({ name, href, image }) => {
  const router = useRouter();
  const handleClick = () => {
    //  TODO: implement auth before pushing to route
    router.push(href);
  };
  return (
    <button
      onClick={handleClick}
      className="group relative flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4"
    >
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image className="object-cover" fill src={image} alt={name} />
      </div>
      <p className="truncate font-medium py-5">{name}</p>
      <div className="absolute flex justify-center items-center transition opacity-0 rounded-full bg-green-500 p-4  drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110">
        <FaPlay className="text-black" />
      </div>
    </button>
  );
};

export default Liked;
