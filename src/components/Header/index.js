"use client"
import React, { useState } from "react";
import Link from "next/link";
import Logo from '../../../public/logo1.png'
import Image from "next/image";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header
      className="w-full top-0 py-10 text-white text-xs lg:tracking-widest items-center z-50 flex justify-between px-8 fixed"
      style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))" }}
    >

      <div className="flex items-center md:m-auto sm:gap-10 gap-8 md:w-9/12 sm:m-auto sm:flex justify-between">
        <Link href="/#home">
          <Image
            src={Logo}
            widht={75}
            height={80}
            alt="logo"
            onClick={() => { }}
            className="w-24 sm:w-32"
          />
        </Link>
        <nav className=" hidden w-full md:flex items-center justify-end gap-10 text-base">
          <Link className="link" href="/#lancamento">
            <p className="hover:text-amber-500 hover:underline hover:underline-offset-4 transition ease-in delay-75 ">
              LANÇAMENTOS
            </p>
          </Link>
          <Link className="link" href="/#sobre" >
            <p className="hover:text-amber-500 hover:underline hover:underline-offset-4 transition ease-in delay-75 ">
              QUEM SOMOS
            </p>
          </Link>
          <Link className="link" href="/#projetos" >
            <p className="hover:text-amber-500 hover:underline hover:underline-offset-4 transition ease-in delay-75 ">
              PORTIFÓLIO
            </p>
          </Link>
          <Link className="link" href="/#contato" >
            <p className="hover:text-amber-500 hover:underline hover:underline-offset-4 transition ease-in delay-75 ">
              CONTATO
            </p>
          </Link>
        </nav>
      </div>

      <section className="MOBILE-MENU flex  text-right md:hidden" >
        <div
          className="space-y-2"
          onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
        >
          <p className="block h-0.5 w-8 animate-pulse bg-amber-500 hover:bg-blue-400"></p>
          <p className="block h-0.5 w-8 animate-pulse bg-amber-500 hover:bg-blue-400"></p>
          <p className="block h-0.5 w-8 animate-pulse bg-amber-500 hover:bg-blue-400"></p>
        </div>

        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <div
            className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-red-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <div className="MENU-LINK-MOBILE-OPEN flex flex-col font-extrabold items-center justify-between min-h-[250px]">
            <Link onClick={() => setIsNavOpen(false)} href="/#home" >
              <p className="hover:underline hover:underline-offset-4 transition ease-in delay-75 ">
                HOME
              </p>
            </Link>
            <Link onClick={() => setIsNavOpen(false)} href="/#sobre" >
              <p className="hover:underline hover:underline-offset-4 transition ease-in delay-75 ">
                QUEM SOMOS
              </p>
            </Link>
            <Link onClick={() => setIsNavOpen(false)} href="/#projetos" >
              <p className="hover:underline hover:underline-offset-4 transition ease-in delay-75 ">
                PORTIFÓLIO
              </p>
            </Link>
            <Link onClick={() => setIsNavOpen(false)} href="/#contato" >
              <p className="hover:underline hover:underline-offset-4 transition ease-in delay-75 ">
                CONTATO
              </p>
            </Link>
            <Link onClick={() => setIsNavOpen(false)} href="/#depoimentos"  >
              <p className="hover:underline hover:underline-offset-4 transition ease-in delay-75 ">
                DEPOIMENTOS
              </p>
            </Link>
          </div>
        </div>
      </section>
     
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        color: white;
        right: 0;
        background: #e4bea7;
        z-index: 99;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      }
    `}</style>
    </header>
  );
}
