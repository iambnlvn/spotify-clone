"use client";

import { Auth } from "@supabase/auth-ui-react";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModal from "@/hooks/useAuthModal";
import { useEffect } from "react";

const AuthModal = () => {
  const supabaseClient = useSupabaseClient();
  const { onClose, isOpen } = useAuthModal();
  const { session } = useSessionContext();
  const router = useRouter();
  const appearence = {
    theme: ThemeSupa,
    variables: {
      default: {
        colors: {
          brand: "#404040",
          brandAccent: "#22c55e",
        },
      },
    },
  };

  const handleChange = (openState: boolean) => {
    if (!openState) {
      onClose();
    }
  };
  useEffect(() => {
    if (session) {
      router.refresh();
      onClose();
    }
  }, [session, router, onClose]);

  return (
    <Modal
      title="Welcome back"
      description="Log in to your account"
      isOpen={isOpen}
      onChange={handleChange}
    >
      <Auth
        supabaseClient={supabaseClient}
        theme="dark"
        providers={["github"]}
        magicLink
        appearance={appearence}
      />
    </Modal>
  );
};

export default AuthModal;
