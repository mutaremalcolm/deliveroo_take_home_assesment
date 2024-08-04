import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { IoBriefcase } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  {
    id: "0",
    title: <FaTwitter size={30} />,
    url: "https://x.com/MalcolmTech",
    mobile: false,
  },
  {
    id: "1",
    title: <FaGithub size={30} />,
    url: "https://github.com/mutaremalcolm/technical-take-home_assesment",
    mobile: false,
  },
  {
    id: "2",
    title: <FaLinkedin size={30} />,
    url: "https://www.linkedin.com/in/malcolm-mutare-a234a61aa/",
    mobile: false,
  },
  {
    id: "3",
    title: <FaSquareInstagram size={30} />,
    url: "https://www.instagram.com/malcolmfullstack/?igsh=cmdpdTRmdzN3eXh5",
    mobile: false,
  },
  {
    id: "4",
    title: <TfiYoutube size={30}/>,
    url: "https://www.youtube.com/channel/UCMbfKNfObUifGLqvhzUKzWw",
    mobile: false,
  },
  {
    id: "5",
    title: "Project Source Code",
    url: "https://github.com/mutaremalcolm/deliveroo_take_home_assesment/tree/main",
    mobile: false,
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
            <Image
              src={`/images/flipdish-logo.png`}
              alt="logo"
              width={170}
              height={170}
            >
              
            </Image>
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
                                } lg:hover:text-primary-foreground xl:px-12 hidden lg:block`}
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
            <IoBriefcase size={30} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navigation;
