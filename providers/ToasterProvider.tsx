"use client";
import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        style: {
          background: "#171717",
          color: "#fff",
        },
        duration: 3000,
      }}
    />
  );
};

export default ToasterProvider;
