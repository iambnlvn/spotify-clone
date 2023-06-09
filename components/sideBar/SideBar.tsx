"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import SideBarItem from "./SideBarItem";
import SideBarSubItem from "./SideBarSubItem";
import Library from "./Library";
import { Song } from "@/types/types";

interface SideBarProps {
  children: React.ReactNode;
  songs: Song[];
}

const SideBar: React.FC<SideBarProps> = ({ children, songs }) => {
  const pathName = usePathname();
  const routes = useMemo(
    () => [
      {
        label: "Home",
        icon: HiHome,
        href: "/",
        activeState: pathName !== "/search",
      },
      {
        label: "Search",
        icon: BiSearch,
        href: "/search",
        activeState: pathName === "/search",
      },
    ],
    [pathName]
  );

  return (
    <div className="h-full flex">
      <div className="h-full w-[300px] hidden md:flex flex-col gap-y-2 p-2">
        <SideBarItem>
          <div className="flex flex-col gap-y-4 p-4">
            {routes.map((route) => (
              <SideBarSubItem key={route.label} {...route} />
            ))}
          </div>
        </SideBarItem>
        <SideBarItem>
          <div className="h-full overflow-y-auto">
            <Library songs={songs} />
          </div>
        </SideBarItem>
      </div>
      <main className="h-full flex-1 py-2 overflow-y-auto">{children}</main>
    </div>
  );
};

export default SideBar;
