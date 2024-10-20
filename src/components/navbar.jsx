import React from "react";

export default function Nav() {
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
    // { button: "Pricing" },
    { button: "Get In Touch", type: "visible", path: "/get-in-touch" },
  ];

  return (
    <div className="navbar bg-blue-secondary sticky top-0 z-20 flex  text-primary-text justify-around">
      <div className="">
        <a href="/" className="btn btn-ghost text-xl flex justify-center items-center">
          <img className="w-20 " src="./assets/logo.png" alt="" />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal flex justify-center items-center gap-x-6 font-semibold px-1">
          {navButton.map((e) =>
            e.children ? (
              <li>
                <details>
                  <summary>{e.button}</summary>
                  <ul className="rounded-md w-56  p-6 flex flex-col gap-y-4 bg-white">
                    {e.children.map((c) => (
                      <a href={c.path}>
                        <li className="hover:underline">{c.button}</li>
                      </a>
                    ))}
                  </ul>
                </details>
              </li>
            ) : (
              <a href={e.path}>
                <li className={`cursor-pointer btn btn-ghost ${e.type === "visible" && "border-none bg-blue-main text-white px-6 rounded-md btn"}`}>{e.button}</li>
              </a>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
