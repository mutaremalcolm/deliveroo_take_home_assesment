import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoBriefcase } from "react-icons/io5";
import Link from "next/link";


const navigation = [
  {
    id: "0",
    title: <FaTwitter size={30}/>,
    url: "https://x.com/MalcolmTech",
  },
  {
    id: "1",
    title: <FaGithub size={30}/>,
    url: "https://github.com/mutaremalcolm/technical-take-home_assesment",
  },
  {
    id: "2",
    title: <FaLinkedin size={30}/>,
    url: "https://www.linkedin.com/in/malcolm-mutare-a234a61aa/",
  },
  {
    id: "3",
    title: <FaSquareInstagram size={30}/>,
    url: "https://www.instagram.com/malcolmfullstack/?igsh=cmdpdTRmdzN3eXh5",
  },
];

const Navigation = () => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-sm 
         border-border lg:bg-transparent lg:backdrop-blur-sm`}
      >
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
          <Link className="block w-[12rem] xl:mr-8" href="/">
            <h1
              className="font-code text-3xl uppercase text-n-1 text-white
                    transition-colors hover:text-primary-foreground"
            >
              FlipDish
            </h1>
          </Link>
          <nav
            className={`fixed top-[5rem] 
                left-0 right-0 bottom-0 bg-card lg:static lg:flex lg:mx-auto lg:bg-transparent`}
          >
            <div className="relative z-2 flex flex-col items-center justify-around m-auto lg:flex-row">
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  href={item.url}
                  className={`block relative font-code text-2xl uppercase 
                                text-card-foreground transition-colors hover:text-secondary-foreground 
                                px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                                  item.url === location.hash
                                    ? "z-2 lg:text-primary-foreground"
                                    : "lg:text-primary-foreground/50"
                                } lg:hover:text-primary-foreground xl:px-12`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </nav>
          <a
            href="https://vercel.com/mutaremalcolms-projects/vite-typescript-portfolio"
            className="hidden lg:block button mr-8 text-primary-foreground/50 transition-colors hover:text-primary-foreground"
          >
            <IoBriefcase size={30}/>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navigation;
