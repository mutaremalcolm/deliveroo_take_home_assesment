import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const Navigation = () => {
  return (
    <>
      <nav className="flex flex-row justify-between pb-2 pr-5 pl-5 md:pb-0">
        <Link
          href="https://github.com/mutaremalcolm/deliveroo_take_home_assesment/tree/main"
          className="flex items-center space-x-2"
        >
          <FaExternalLinkAlt size={15} />
          <span>Project Source Code</span>
        </Link>
        <div className="flex flex-col space-y-1 items-center justify-center">
          <div className="flex flex-row items-center gap-3">
            <Link
              href="https://github.com/mutaremalcolm/technical-take-home_assesment"
              className="flex items-center text-card-foreground transition-colors hover:text-secondary-foreground"
            >
              <FaGithub size={15} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/malcolm-mutare-a234a61aa/"
              className="flex items-center text-card-foreground transition-colors hover:text-secondary-foreground"
            >
              <FaLinkedin size={15} />
            </Link>
            <Link
              href="https://github.com/mutaremalcolm/deliveroo_take_home_assesment/tree/main"
              className="flex items-center text-card-foreground transition-colors hover:text-secondary-foreground"
            >
              <FaTwitter size={15} />
            </Link>
          </div>
          <span className="hidden md:inline-block text-xs font-semibold text-gray-400">
            by: Malcolm Mutare
          </span>
        </div>
      </nav>
      <header className="flex flex-col items-center mt-2 border-b border-flipdish-blue md:mx-32">
        <Image
          src="/images/flipdish-logo.svg"
          height={150}
          width={75}
          alt="Logo"
        />
        <h1 className="text-flipdish-blue text-xl md:text-2xl font-bold pt-1 mb-2 md:pt-3 px-10 tracking-widest whitespace-nowrap">
          Today's menu
        </h1>
      </header>
    </>
  );
};

export default Navigation;
