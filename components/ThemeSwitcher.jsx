"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { PiMoonStarsFill } from "react-icons/pi";
import { HiSun } from "react-icons/hi";

const ThemeSwitcher = ({ showText }) => {
  //For Theme switch
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme("light");

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div>
      {theme === "light" ? (
        <div
          onClick={() => setTheme("dark")}
          className="  flex items-center gap-2 hover:scale-[.98] py-2  
            transition-all duration-300 cursor-pointer"
        >
          <PiMoonStarsFill size={24} />{" "}
          {showText && (
            <span className=" font-semibold text-base  ">Dark Mode</span>
          )}
        </div>
      ) : (
        <div
          onClick={() => setTheme("light")}
          className="  flex items-center gap-2 hover:scale-[.98] py-2  transition-all duration-300 cursor-pointer"
        >
          <HiSun size={24} />{" "}
          {showText && (
            <span className=" font-semibold text-base  ">Light Mode</span>
          )}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
// px-3    hover:rounded-md text-gray-900 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800
