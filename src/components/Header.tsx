import { Button } from "../components/ui/button";
import Logo from "../../src/assets/flipdish_logo.png";
import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <nav className="bg-slate-300 rounded-full">
        {/* Top Row for Logo and Buttons */}
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
          <div className="font-family: ui-monospace text-blue-900">
            <span className="text-sm lg:text-1xl md:text-3xl font-semibold">
              FlipDish Assessment
            </span>
          </div>
          <div>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/malcolm-mutare-a234a61aa/"
            >
              <Button>
                <FaLinkedin size={30} color="#003366" />
              </Button>
            </a>
            <a
              target="_blank"
              href="https://github.com/mutaremalcolm/flipdish_assesment"
            >
              <Button>
                <FaSquareGithub size={30} color="#003366" />
              </Button>
            </a>
          </div>
        </div>
      </nav>
      <div className="font-family: ui-monospace text-blue-900 text-center py-10">
        <h1 className="md:text-4xl lg:text-1xl font-bold">Today's Menu</h1>
      </div>
    </>
  );
};

export default Header;
