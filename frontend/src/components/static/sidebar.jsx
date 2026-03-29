import React from "react";
import { menuItems } from "@/data/sidebar-nav";
import { Link, useLocation } from "react-router-dom";
import { Separator } from "../ui/separator";

import WebsiteNavbarLogo from "@/assets/logo/lintforge_website_navbar.webp";

function Sidebar() {
  const location = useLocation();

  return (
    <div className="h-[calc(100vh)] w-60 bg-sidebar flex flex-col">
      <div className="h-16 w-full flex flex-col justify-center items-center">
        <img src={WebsiteNavbarLogo} alt="LintForge Logo" className="h-10" />
        <Separator className="mx-4" />
      </div>

      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <ul>
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`px-3 py-2 text-sm no-underline decoration-none focus:none ${
                    location.pathname === item.path
                      ? "text-primary font-medium"
                      : "text-foreground"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-4 py-3 text-xs text-primary flex flex-col items-center">
          <Separator className="mx-4" />
          <p>©{new Date().getFullYear()} LintForge</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
