"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {theme === "dark" ? (
        <button className="group" onClick={() => setTheme("light")}>
          <Sun className="group-hover:text-primary-green h-[1.2rem] w-[1.2rem]" />
        </button>
      ) : (
        <button className="group" onClick={() => setTheme("dark")}>
          <Moon className="group-hover:text-primary-green h-[1.2rem] w-[1.2rem]" />
        </button>
      )}
    </>
  );
}
