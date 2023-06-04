"use client";

import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import Button from "./Button";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import useAuthModal from "@/hooks/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  const { onOpen } = useAuthModal();
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handleLogout = async () => {
    const error = await supabaseClient.auth.signOut();
    router.refresh();
  };

  return (
    <header
      className={twMerge(
        "h-fit bg-gradient-to-b from-emerald-800 p-6",
        className
      )}
    >
      <div className="w-full flex items-center justify-between mb-4">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className="group rounded-full flex items-center justify-center bg-black transition"
          >
            <RxCaretLeft
              className="text-white group-hover:text-neutral-400"
              size={35}
            />
          </button>
          <button
            onClick={() => router.forward()}
            className="group rounded-full flex items-center justify-center bg-black transition"
          >
            <RxCaretRight
              className="text-white group-hover:text-neutral-400"
              size={35}
            />
          </button>
        </div>
        <div className="flex md:hidden items-center gap-x-2">
          <button className="flex items-center justify-center rounded-full p-2 bg-white">
            <HiHome size={20} className="text-black" />
          </button>
          <button className="flex items-center justify-center rounded-full p-2 bg-white">
            <BiSearch size={20} className="text-black" />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          {user ? (
            // TODO: add user profile
            <div className="flex gap-x-2 items-center">
              <h1 className="text-lg font-semibold">
                {user.email?.substring(0, user.email.indexOf("@"))}
              </h1>
              <Button className="bg-white px-6" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <>
              <div>
                <Button
                  className="bg-transparent text-neutral-400 font-medium"
                  onClick={onOpen}
                >
                  Sign up
                </Button>
              </div>
              <div>
                <Button className="bg-white px-6 py-2" onClick={onOpen}>
                  Log in
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </header>
  );
};

export default Header;
