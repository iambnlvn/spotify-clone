"use client";
import AuthModal from "@/components/modal/AuthModal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
  // track the state of the modal if it's rendered or not
  const [isMounted, setIsMounted] = useState(false);
  // fix for hydration error
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;
  return <AuthModal />;
};

export default ModalProvider;
