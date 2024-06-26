"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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

    <div className="flex fixed-top fixed justify-between items-center w-full h-20 px-4 text-white bg-gray-100 nav">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-4xl font-signature ml-2">
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-green-600">Helios</span><span className="text-black">Connect</span>
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, name, link}) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-green-600 duration-200 link-underline"
          >
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>

      <ul className="hidden md:flex">
        <li>
          <button className="mx-2 px-4 py-1 bg-white border border-2 rounded rounded-xl border-green-600 text-green-600">Log In</button>
        </li>
        <li>
        <button className=" mx-2 px-4 py-1 bg-green-600 border border-2 rounded-xl border-green-600 text-white">Register</button>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, name, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;