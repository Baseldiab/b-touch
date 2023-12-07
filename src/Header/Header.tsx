import {
  faSearch,
  faCartShopping,
  faUser,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "@material-tailwind/react";

import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import NavList from "./Header-Components/NavList";
import LogoMenu from "./Header-Components/Logo-Menu";
import { useAuth } from "../Auth/Auth";

const Header: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const auth = useAuth();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  const handleDeleteClick = () => {
    setSearchText("");
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <header>
      <nav className="main-nav bg-mainBgColor md:pt-4 pt-2">
        <div className="main-nav__container myContainer flex lg:flex-row flex-col justify-center items-center">
          <LogoMenu />

          <div className="main-nav__left-lg text-white basis-full lg:basis-10/12 flex-col justify-center hidden lg:flex">
            <div className="main-nav__search my-2 lg:my-0 sm:flex-row flex-col justify-center hidden md:flex">
              <form
                className="main-nav__form flex items-center justify-center basis-full	 lg:basis-5/6 px-2"
                onSubmit={handleSubmit}
              >
                <div className="main-nav__input-delete bg-white rounded-l-full w-11/12	 lg:w-3/5 py-1 sm:px-4 px-1 h-8 flex justify-between">
                  <input
                    className="main-nav__input  text-textDarkColor placeholder:text-textDarkColor font-roboto focus:outline-none sm:w-11/12 text-base basis-10/12"
                    type="text"
                    placeholder="What Are You Looking For ?"
                    value={searchText}
                    onChange={handleInputChange}
                  />

                  {searchText && (
                    <button
                      type="button"
                      className="bg-white"
                      onClick={handleDeleteClick}
                    >
                      <FontAwesomeIcon
                        className="text-gray-700"
                        icon={faTimes}
                      />
                    </button>
                  )}
                </div>

                <button
                  className="main-nav__search-btn bg-white rounded-r-full py-1 sm:px-4 px-1 h-8"
                  type="submit"
                >
                  <FontAwesomeIcon
                    className="main-nav__search-icon text-gray-700"
                    icon={faSearch}
                  />
                </button>
              </form>

              <div className="main-nav__left-icons basis-full lg:basis-1/6 hidden	 lg:flex lg:justify-end justify-center my-3 sm:my-2">
                {!auth.isLogged ? (
                  <NavLink
                    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                    className={`main-nav__lgLogin uppercase text-white disabled hover:text-primary ${({
                      isActive,
                      isPending,
                    }: {
                      isActive: boolean;
                      isPending: boolean;
                    }) => (isActive ? "active" : isPending ? "pending" : "")}`}
                    to="login"
                  >
                    <FontAwesomeIcon className="sm:mr-2 mx-2" icon={faUser} />
                  </NavLink>
                ) : (
                  <Link
                    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                    className={`main-nav__lgLogin uppercase text-white bg-primary hover:bg-buttonColor rounded-full w-6  h-6 p-2 text-sm flex justify-center items-center`}
                    to="profile"
                    title="my account"
                  >
                    {auth.username?.slice(0, 1)}
                  </Link>
                )}
                <Link
                  className="main-nav__lgCart uppercase text-white disabled hover:text-primary"
                  to="#"
                >
                  <FontAwesomeIcon
                    className="sm:ml-2 mx-2 hover:text-primary"
                    icon={faCartShopping}
                  />
                </Link>
              </div>
            </div>

            <Navbar className="main-nav__menu-lg blur-none bg-mainBgColor rounded-none border-0 mx-auto  px-2 my-auto lg:px-3 lg:block hidden shadow-none">
              <div className="container mx-auto flex items-center justify-center text-white">
                <div className="hidden lg:block">{NavList}</div>
              </div>
            </Navbar>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
