"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AuthGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [accessToken, setAccessToken] = useState<string>();

  useEffect(() => {
    if (!accessToken) {
      const token = localStorage.getItem("accessToken");
      setAccessToken(token ?? undefined);
      if (!token && pathname !== "/login") {
        router.push("/login");
      }
    }
  }, [accessToken, router, pathname]);

  if (!accessToken && pathname !== "/login") {
    return null;
  }

  if (accessToken && pathname === "/login") {
    router.push("/");
    return null;
  }

  return children;
};

export default AuthGuard;
