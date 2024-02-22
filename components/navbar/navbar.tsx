"use client";

import { useRouter } from "next/navigation";

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

  return (
    <aside className="container fixed z-10 bg-white px-0 shadow-sm">
      <nav className="border-b-[1px] px-4 py-4">
        <ul className="flex flex-row items-center justify-start gap-8">
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
