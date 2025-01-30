import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/logo.svg";
import "./Header.css";
import { CiSearch } from "react-icons/ci";
import { RiLogoutBoxLine } from "react-icons/ri";

export default function Header() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link className="header__logo-link" to={"/"}>
            <img className="header__logo-img" src={logo} alt="" />
          </Link>
          <ul className="header__list">
            <li className="header__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "header__item-linkk" : "header__item-link"
                }
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "header__item-linkk" : "header__item-link"
                }
                to={"/shop"}
              >
                Shop
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "header__item-linkk" : "header__item-link"
                }
                to={"/care"}
              >
                Plant Care
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "header__item-linkk" : "header__item-link"
                }
                to={"/blog"}
              >
                Blogs
              </NavLink>
            </li>
          </ul>
          <div className="header__end">
            <div className="header__search-wrapper">
              <input
                type="text"
                className={`header__search-input ${
                  isSearchVisible ? "" : "visually-hidden"
                }`}
                placeholder="Search here..."
              />
            </div>
            <button onClick={toggleSearch}>
              <CiSearch className="header__end-icon1" />
            </button>

            <div className="header__end-box">
              <Link to={"/shop/card"} className="header__end-link-basket">
                <span className="header__end-span">6</span>
                <span className="header__end-icon2">🛒</span>
              </Link>
            </div>
            <div className="header__end-boxx">
              <Link to={"#"} className="header__end-link-login">
                <RiLogoutBoxLine className="header__end-img fill-[#fff]" />
                <p className="header__end-text">Login</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
