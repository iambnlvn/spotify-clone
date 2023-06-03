import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { IconType } from "react-icons";

interface SideBarSubItemProps {
  icon: IconType;
  href: string;
  label: string;
  activeState?: boolean;
}

const SideBarSubItem: React.FC<SideBarSubItemProps> = ({
  icon: Icon,
  href,
  label,
  activeState,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        "h-auto w-full flex flex-row items-center gap-x-4 text-neutral-400 text-md font-medium cursor-pointer hover:text-white transition py-1",
        activeState && "text-white"
      )}
    >
      <Icon size={26} />
      <p className="w-full truncate">{label}</p>
    </Link>
  );
};

export default SideBarSubItem;
