
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
      <nav className="flex flex-row justify-between items-center pb-2 pr-5 pl-5 md:pb-0">
        <div className="flex flex-row items-center space-x-2">
          <Link
            href="https://github.com/mutaremalcolm/deliveroo_take_home_assesment/tree/main"
            className="flex items-center space-x-2"
          >
            <FaExternalLinkAlt size={15} />
            <span>Project Source Code</span>
          </Link>
        </div>
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
      </nav>
      <header className="flex flex-col items-center mt-2 border-b border-flipdish-blue md:mx-32">
        <Image
          src="/images/flipdish-logo.svg"
          height={140}
          width={75}
          alt="Logo"
          />
          <h1>
            Today's menu
          </h1>
      </header>
    </>
  );
};

export default Navigation;
