"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const navigationMenu = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Work",
    link: "/work",
  },
  {
    title: "Project",
    link: "/projects",
  },
  {
    title: "Blog",
    link: "/blogs",
  },
];

const Navbar = () => {
  const router = useRouter();
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      setIsNavbarVisible(isScrollingUp || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <aside
      className={`container fixed z-10 h-20 bg-white px-4 transition duration-500 ${isNavbarVisible ? "opacity-100" : "opacity-0"}`}
    >
      <nav className="h-full">
        <ul className="flex h-full flex-row items-center justify-start gap-8">
          {navigationMenu.map((menu, index) => (
            <li key={index}>
              <a
                className="cursor-pointer"
                onClick={() => {
                  router.push(menu.link);
                }}
              >
                {menu.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Navbar;
