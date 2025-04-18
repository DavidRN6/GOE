/* ======================
  table of contents
=========================

  1. Imports
  2. Scroll To Section Function
  3. Menu Function
  4. Logo
  5. Menu For Large Screen
  6. Menu For Small Screen ( Mobile Menu )
*/

/*=============
  1. Imports
===============*/
"use client";
import Image from "next/image";
import logo from "../../public/LOGO.webp";
import logo2 from "../../public/EgyBook.webp";
import avatar from "../../public/avatar.webp";
import { MdLanguage } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <nav className="w-full flex justify-between items-center xl:container mx-auto py-6 px-6 lg:px-2 lg:py-4 bg-[#121212] z-50">
      {/*=========
        4. Logo
      ============*/}
      <div>
        <Image src={logo} alt="Logo" className="w-[100px] hidden lg:flex" />
        <Image src={logo2} alt="Logo" className="w-[100px] py-0.5" />
      </div>

      {/*=========================
        5. Menu For Large Screen
      ============================*/}
      <ul className="hidden lg:flex justify-center gap-9 items-center text-xl">
        <li className="cursor-pointer bg-[#444444]/25 p-2 rounded-full">
          <LuSearch className="text-[#D2AC71]" />
        </li>
        <li className="cursor-pointer">
          <span className="text-[#D2AC71]">GOE</span>
        </li>
        <li className="cursor-pointer">
          <span className="text-[#D2AC71]">Egy</span>Book
        </li>
        <li className="cursor-pointer">
          <span className="text-[#D2AC71]">Egy</span>Explore
        </li>
        <li className="cursor-pointer">
          <span className="text-[#D2AC71]">Egy</span>Tales
        </li>
        <li className="cursor-pointer">
          <span className="text-[#D2AC71]">Egy</span>Treasure
        </li>
      </ul>

      {/*=============
        5. Language
      ================*/}
      <div className="hidden lg:flex gap-7">
        <div className="flex justify-center items-center gap-1 text-lg cursor-pointer">
          <MdLanguage className="text-2xl" />
          <p>EN</p>
        </div>

        {!loggedIn && (
          <div className="gap-3 flex items-center">
            <button
              className="bg-[#D2AC71] py-1.5 px-7 rounded-xl cursor-pointer"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              className="bg-[#D2AC71] py-1.5 px-7 rounded-xl cursor-pointer"
              onClick={handleLogin}
            >
              Sign up
            </button>
          </div>
        )}

        {loggedIn && (
          <div className="flex items-center text-2xl gap-14">
            <div className="flex items-center gap-7">
              <p className="opacity-40">|</p>
              <FaRegHeart className="cursor-pointer" />
              <LuShoppingCart className="cursor-pointer" />
            </div>

            <div className="group relative">
              {/*=======
                Avatar
              ==========*/}
              <div>
                <Image
                  src={avatar}
                  alt="avatar"
                  className="w-11 cursor-pointer"
                />
              </div>

              {/*=========
                dropdown
              =============*/}
              <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-40">
                <div className="flex flex-col gap-3 w-40 py-3 px-5 bg-white text-base rounded-3xl text-[#121212]">
                  <p className="cursor-pointer hover:text-[#D2AC71]">
                    My Profile
                  </p>
                  <p className="cursor-pointer hover:text-[#D2AC71]">
                    Saves bundles
                  </p>
                  <p className="cursor-pointer hover:text-[#D2AC71]">
                    Invite friends
                  </p>
                  <p className="cursor-pointer hover:text-[#D2AC71]">
                    Settings
                  </p>
                  <p
                    onClick={handleLogout}
                    className="cursor-pointer text-red-600 hover:text-[#D2AC71]"
                  >
                    Log out
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/*======================
        menu for small screen
      =========================*/}
      <span
        onClick={() => setVisible(true)}
        className="lg:hidden text-3xl cursor-pointer"
      >
        <IoMdMenu className="text-[#D2AC71]" />
      </span>

      <div
        className={`absolute top-0 right-0 z-50 bottom-0 overflow-hidden bg-[#121212] transition-all
    ${visible ? `w-full` : `w-0`}`}
      >
        <div className="flex flex-col justify-between h-full">
          {/* Top Section */}
          <div>
            <div
              onClick={() => setVisible(false)}
              className="flex items-end flex-col-reverse gap-4 p-5 cursor-pointer"
            >
              <span className="h-4 text-3xl items-center hover:text-[#D2AC71]">
                <IoClose />
              </span>
            </div>
            <ul className="py-2 pl-6">
  <li className="text-2xl sm:text-[32px] mb-6 cursor-pointer">
    <span className="text-[#D2AC71]">Egy</span>Book
  </li>

  {loggedIn && (
    <>
      <li className="cursor-pointer hover:text-[#D2AC71]">
        <div className="flex items-center gap-2 text-2xl sm:text-[32px]">
          <FaRegHeart className="text-2xl" />
          <p>Wishlist</p>
        </div>
      </li>

      <li className="my-4 cursor-pointer hover:text-[#D2AC71]">
        <div className="flex items-center gap-2 text-2xl sm:text-[32px]">
          <LuShoppingCart className="text-2xl" />
          <p>Cart</p>
        </div>
      </li>
    </>
  )}

  <li>
    <div className="flex items-center gap-1 cursor-pointer text-2xl sm:text-[32px] hover:text-[#D2AC71]">
      <MdLanguage className="text-2xl" />
      <p>EN</p>
    </div>
  </li>

  {!loggedIn ? (
    <>
      <li
        className="text-2xl sm:text-[32px] my-3 cursor-pointer hover:text-[#D2AC71]"
        onClick={handleLogin}
      >
        Login
      </li>
      <li
        className="text-2xl sm:text-[32px] cursor-pointer hover:text-[#D2AC71]"
        onClick={handleLogin}
      >
        Sign up
      </li>
    </>
  ) : (
    <ul className="py-4 flex flex-col gap-1 text-xl">
      <li className="cursor-pointer hover:text-[#D2AC71]">My Profile</li>
      <li className="cursor-pointer hover:text-[#D2AC71]">Saved deals</li>
      <li className="cursor-pointer hover:text-[#D2AC71]">Invite friends</li>
      <li className="cursor-pointer hover:text-[#D2AC71]">Settings</li>
      <li
        className="cursor-pointer text-red-600 hover:text-[#D2AC71]"
        onClick={handleLogout}
      >
        Log out
      </li>
    </ul>
  )}
</ul>

          </div>

          {/* Bottom Logo */}
          <div className="p-10 flex justify-center">
            <Image src={logo} alt="logo" className="w-[200px] opacity-50" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;