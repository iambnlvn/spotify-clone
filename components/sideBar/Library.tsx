import { VscLibrary } from "react-icons/vsc";
import { AiOutlinePlus } from "react-icons/ai";
const Library = () => {
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
          size={20}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
    </div>
  );
};

export default Library;
