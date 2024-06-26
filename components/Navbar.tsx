"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from 'globals.css';

const Navbar = () => {
    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Information",
      link: "Information",
    },
    {
      id: 3,
      name: "Consulting",
      link: "Consulting",
    },
    {
      id: 4,
      name: "Contact",
      link: "Contact",
    },
    {
      id: 5,
      name: "About us",
      link: "About",
    },
  ];
  return (
    <div className="navbar-background">
      <div className="navbar-container">
        <div className="logo-container">
          <h1 className="logo-text"> <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <span class="highlight">Helios</span>Connect
          </a></h1>
        </div>

        <ul className="nav-links hidden md:flex">
          {links.map(({ id, name, link }) => (
            <li key={id} className="nav-link-item">
              <Link href={link}>{name}</Link>
            </li>
          ))}
        </ul>

        <div className="auth-buttons hidden md:flex">
          <button className="secondaryButton">Log In</button>
          <button className="primaryButton">Register</button>
        </div>

        <div
          onClick={() => setNav(!nav)}
          className="menu-icon cursor-pointer md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;