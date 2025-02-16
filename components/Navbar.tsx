"use client";

import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import MobileNavbar from "./MobileNavbar";
import { cn } from "@/lib/utils";
import useHash from "@/hooks/useHash";
import useMounted from "@/hooks/useMounted";
import { navBarLinks } from "@/constants";

const Navbar = () => {
  const hash = useHash();
  const isMounted = useMounted();

  if (!isMounted) {
    return null;
  }
  return (
    <header className="fixed top-0 bg-white dark:bg-primary-black z-[1000] w-full">
      <div className="px-5 mx-2">
        <div className="flex justify-between items-center">
          <div>
            <MobileNavbar />
          </div>
          <nav className="hidden lg:flex gap-7 px-6 py-2">
            {navBarLinks.map((link) => {
              const isActive = `#${hash}` === `${link.route}`;
              return (
                <a
                  key={link.label}
                  className={cn(
                    "hover:bg-primary-green font-semibold text-black dark:text-white px-4 py-2 rounded-full text-xl",
                    { "bg-primary-green": isActive }
                  )}
                  href={link.route}
                >
                  {/* <Image
                    src={link.iconURL}
                    width={30}
                    height={30}
                    alt="icon"
                  /> */}
                  {link.label}
                </a>
              );
            })}
          </nav>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
