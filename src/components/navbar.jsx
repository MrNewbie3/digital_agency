import React, { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navButton = [
    { button: "Home", path: "/" },
    { button: "About", path: "/about" },
    {
      button: "Features",
      children: [
        { button: "Social Media Management", path: "/social-media" },
        { button: "Web Development", path: "/web-development" },
        { button: "UI/UX Design", path: "/coming-soon" },
      ],
    },
    { button: "Get In Touch", type: "visible", path: "/get-in-touch" },
  ];

  return (
    <div className="navbar md:px-20 bg-blue-secondary sticky top-0 z-20 text-primary-text">
      {/* Logo */}
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl flex items-center">
          <img className="w-20" src="./assets/logo.png" alt="Logo" />
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex flex-none">
        <ul className="menu menu-horizontal flex items-center gap-x-6 font-semibold px-1">
          {navButton.map((e) =>
            e.children ? (
              <li key={e.button} tabIndex={0}>
                <details>
                  <summary className="cursor-pointer">{e.button}</summary>
                  <ul className="rounded-md w-56 p-4 flex flex-col gap-y-4 bg-white shadow-md">
                    {e.children.map((c) => (
                      <li key={c.button}>
                        <a href={c.path} className="hover:underline">
                          {c.button}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ) : (
              <li key={e.button}>
                <a href={e.path} className={`cursor-pointer btn btn-ghost ${e.type === "visible" && "border-none bg-blue-main text-white px-6 rounded-md"}`}>
                  {e.button}
                </a>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden flex-none">
        <button className="btn btn-square btn-ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-10">
          <ul className="menu menu-vertical p-4 gap-y-4 font-semibold">
            {navButton.map((e) =>
              e.children ? (
                <li key={e.button}>
                  <details>
                    <summary className="cursor-pointer">{e.button}</summary>
                    <ul className="rounded-md p-4 flex flex-col gap-y-4 bg-gray-100">
                      {e.children.map((c) => (
                        <li key={c.button}>
                          <a href={c.path} className="hover:underline">
                            {c.button}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={e.button}>
                  <a href={e.path} className={`cursor-pointer btn btn-ghost ${e.type === "visible" && "border-none bg-blue-main text-white px-6 rounded-md"}`}>
                    {e.button}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
