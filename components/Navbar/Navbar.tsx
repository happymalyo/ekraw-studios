import * as React from "react";
import { navList } from "./NavList/NavList";
import NavItem from "./NavItem";

const Nav = () => {
  return (
    <div className="flex gap-6 md:gap-10">
      {navList.map((navMenu, index) =>
        navMenu?.expandable ? (
          <a
            key={`nav-menu-${index}`}
            href={navMenu.link}
            className="flex items-center text-sm font-medium hidden lg:block"
          >
            <span className="text-sm font-medium text-secondary-foreground">
              {navMenu.label}
            </span>
          </a>
        ) : (
          <NavItem key={`nav-menu-${index}`} {...navMenu} />
        )
      )}
    </div>
  );
};

export default Nav;
