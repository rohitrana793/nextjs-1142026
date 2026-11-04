"use client";

import Link from "next/link";
import navLinks from "../constants/navLinks";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { logout } from "@/redux/auth/authSlice";
import { FaShopify } from "react-icons/fa6";

const Header = () => {
  const pathname = usePathname();
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const logoutUser = () => {
    dispatch(logout());
  };

  return (
    <header className="w-full text-gray-700 bg-white shadow-sm body-font sticky top-0 bg-">
      <div className="container flex flex-col items-start py-6 mx-auto md:flex-row">
        <div className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0 ">
          <FaShopify size={36} /> <span className="ml-1">ShopMe</span>
        </div>
        <nav className="flex items-center justify-center text-base md:ml-auto">
          {navLinks.map((navLink) => {
            const isActive =
              navLink.href === "/"
                ? pathname === navLink.href
                : pathname.startsWith(navLink.href);
            if (isAuthenticated == navLink.auth) {
              return (
                <Link
                  key={navLink.href}
                  href={navLink.href}
                  className={`mr-5 font-medium ${isActive ? "text-blue-700" : ""}`}
                >
                  {navLink.name}
                </Link>
              );
            }
          })}
          {isAuthenticated ? (
            <button
              onClick={logoutUser}
              className="bg-slate-600 py-1 px-4 text-white cursor-pointer rounded"
            >
              Logout
            </button>
          ) : null}
        </nav>
      </div>
    </header>
  );
};

export default Header;
