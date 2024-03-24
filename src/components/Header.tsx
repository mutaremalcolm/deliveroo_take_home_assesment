import { Button } from "./ui/button";
import Logo from "../../src/assets/flipdish_logo.png";
import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <nav className="border-2 rounded-md">
        <div className="flex justify-between items-center mb-8">
          <div className="ml-2">
            <img
              src={Logo}
              alt="logo"
              height={100}
              className="mx-auto"
              width={200}
            />
          </div>
          <div className="flex justify-between bg-transparent mr-5">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/malcolm-mutare-a234a61aa/"
            >
              <Button className="bg-blue-900 mr-2">
                <FaLinkedin size={30}  />
              </Button>
            </a>
            <a
              target="_blank"
              href="https://github.com/mutaremalcolm/flipdish_assesment"
            >
              <Button className="bg-blue-900">
                <FaSquareGithub size={30}  />
              </Button>
            </a>
          </div>
        </div>
      </nav>
      <div className="font-family: ui-monospace">
            <span className="text-sm lg:text-1xl md:text-3xl font-semibold">
              FlipDish Assessment
            </span>
          </div>
      <div className="font-family: ui-monospace text-center py-0">
        <h1 className="md:text-4xl lg:text-1xl font-bold">Today's Menu</h1>
      </div>
    </>
  );
};

export default Header;
