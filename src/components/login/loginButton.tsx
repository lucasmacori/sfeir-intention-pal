"use client";

import { signInWithGoogle } from "@/lib/firebase";
import { BrandGoogle } from "@mynaui/icons-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function LoginButton() {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      const user = result.user;
      const idToken = await user.getIdToken();
      localStorage.setItem("accessToken", idToken);
      return router.push("/");
    } catch (err) {
      console.log("An error occured during Google sign-in", err);
      return router.push("/error");
    }
  };

  return (
    <div className="mt-4 flex flex-col items-center">
      <Image src="/character/axolot-button.png" alt="Axolot is happy!" width="256" height="256" />
      <Button className="w-sm bg-sfeir-blue" onClick={handleLogin}>
        <BrandGoogle />
        Sign-in with Google
      </Button>
    </div>
  );
};