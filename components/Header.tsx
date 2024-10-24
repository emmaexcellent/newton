"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import NavLinks from "./NavLinks";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-opacity-50 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-6xl mx-auto p-3 md:px-5 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.svg"
            width={120}
            height={40}
            alt="Newton Academy"
            priority
          />
        </Link>
        <div className="lg:hidden flex items-center gap-5">
          <Link href="#">
            <button className="bg-gradient rounded-full text-background py-2 md:py-3 px-3 md:px-5 text-xs md:text-sm">
              Apply Now
            </button>
          </Link>
          <Sheet open={openMenu} onOpenChange={setOpenMenu}>
            <SheetTrigger className="lg:hidden">
              <Image
                src="/icon/menu.svg"
                width={35}
                height={35}
                alt="menu bar"
                priority
                className="w-8 md:w-12"
              />
            </SheetTrigger>
            <SheetContent className="lg:hidden bg-[#FFFFC3]">
              <SheetHeader>
                <SheetTitle />
                <SheetDescription />
              </SheetHeader>
              <NavLinks setOpenMenu={setOpenMenu} />
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden lg:block">
          <NavLinks setOpenMenu={setOpenMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
