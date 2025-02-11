import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navBarLinks } from "@/constants";

import useHash from "@/hooks/useHash";
import useMounted from "@/hooks/useMounted";
import { cn } from "@/lib/utils";
import Link from "next/link";

const MobileNavbar = () => {
  const hash = useHash();
  const isMounted = useMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="lg:hidden ">
      <Sheet>
        <SheetTrigger>
          <div className="mr-5 my-5">
            <div className="w-full flex flex-col gap-1.5 items-start justify-between group">
              <span className="w-[14px] group-hover:w-[20px] h-[1.5px] bg-black dark:bg-white group-hover:bg-primary-green transition-all duration-300"></span>
              <span className="w-[20px] h-[1.5px] bg-black dark:bg-white group-hover:bg-primary-green transition-all duration-300"></span>
              <span className="w-[14px] group-hover:w-[20px] h-[1.5px] bg-black dark:bg-white group-hover:bg-primary-green transition-all duration-300"></span>
            </div>
          </div>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="bg-white dark:bg-black border-none"
        >
          <SheetTitle></SheetTitle>
          <div>
            <SheetClose asChild>
            <nav className="flex flex-col justify-center items-center gap-7 px-6 py-2 mt-5">
                {navBarLinks.map((link) => {
                  const isActive = `#${hash}` === `${link.route}`;
                  return (
                    <Link
                      key={link.label}
                      className={cn(
                        "hover:bg-primary-green font-semibold text-black dark:text-white px-4 py-2 rounded-full text-xl",
                        { "bg-primary-green": isActive }
                      )}
                      href={link.route}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
