import { Button } from "./ui/button";
import Logo from "../../src/assets/flipdish_logo.png";
import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <nav>
        <div className="bg-blue-900 text-white py-5">
          <span className="mx-auto max-w-screen-lg block text-center">
            Flipdish POS is an all-in-one restaurant management system
          </span>
        </div>
        <div className="flex justify-between items-center px-5 max-w-screen-lg mx-auto">
          <div className="ml-2">
            <img
              src={Logo}
              alt="logo"
              height={100}
              className="mx-auto"
              width={200}
            />
          </div>
          <div className="flex bg-transparent">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/malcolm-mutare-a234a61aa/"
            >
              <Button className="bg-blue-900 mr-2">
                <FaLinkedin size={30} />
              </Button>
            </a>
            <a
              target="_blank"
              href="https://github.com/mutaremalcolm/flipdish_assesment"
            >
              <Button className="bg-blue-900">
                <FaSquareGithub size={30} />
              </Button>
            </a>
          </div>
        </div>
      </nav>
      <div className="text-center py-0">
        <h1 className="font-sans md:text-4xl lg:text-1xl font-bold text-blue-900">
          Today's Menu
        </h1>
      </div>
    </>
  );
};

export default Header;
