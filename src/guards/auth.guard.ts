"use client";

import { app } from "@/lib/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AuthGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [accessToken, setAccessToken] = useState<string>();
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    if (!accessToken) {
      const token = localStorage.getItem("accessToken");
      setAccessToken(token ?? undefined);
      if (!token && pathname !== "/login") {
        router.push("/login");
      }
    }
  }, [accessToken, router, pathname]);

  useEffect(() => {
    if (!app) {
      return;
    }

    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setReady(true);
      }
    });

    return () => unsubscribe();
  });

  if (!accessToken && pathname !== "/login") {
    return null;
  }

  if (accessToken && pathname === "/login") {
    router.push("/");
    return null;
  }

  if (!ready) {
    return null;
  }

  return children;
};

export default AuthGuard;
