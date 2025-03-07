"use client";

import React, { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import useImageTheme from "@/hooks/use-image-theme";
import { cn } from "@/lib/utils";
import useScroll from "@/hooks/use-scroll";

const Header = () => {
  const src: any = useImageTheme({
    darkName: "/dark-mode.png",
    lightName: "/ekraw-light.jpeg",
  });
  const scrolled = useScroll(5);
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className={cn(
        "sticky inset-x-0 top-0 z-30 w-full transition-all mt-[20px]",
        {
          "backdrop-blur-lg py-[10px]": scrolled,
        }
      )}
    >
      <div className="flex w-full h-16 items-center max-w-7xl  mx-auto justify-between sm:space-x-0">
        <div>
          <Image
            src={src}
            className={cn("pt-5 pl-7 transition-all duration-300", {
              "rounded-r-full pt-0 w-[90px]": scrolled, // Curves only the right side
            })}
            alt="Mëkan logo"
            width={120}
            height={40}
          />
        </div>
        <div className="flex justify-end items-center space-x-4">
          <Navbar />
          <nav className="hidden lg:flex items-center space-x-4">
            <Button
              asChild
              className={cn(
                "bg-primary text-primary-foreground hover:bg-[#d1254e] transition-all duration-300",
                "dark:bg-primary dark:text-primary-foreground dark:hover:bg-[#d1254e]"
              )}
            >
              <Link href="/">New Project</Link>
            </Button>
            <button className="text-foreground hover:text-primary transition-colors">
              EN
            </button>
            <ThemeToggle className="text-foreground hover:text-primary" />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
