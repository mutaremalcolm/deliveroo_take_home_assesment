import { Button } from "../components/ui/button";
import Logo from "../../src/assets/flipdish_logo.png";
import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <nav className="flex flex-row justify-around items-center ml-2">
        <div>
          <img
            src={Logo}
            alt="logo"
            height={100}
            className="mx-auto"
            width={200}
          />
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
      </nav>
      <div className="font-family: ui-monospace text-blue-900 text-center py-10">
        <span className="text-1xl md:text-3xl lg:text-4xl font-semibold">
          FlipDish Assessment
        </span>
        <h1 className="md:text-4xl lg:text-1xl font-bold mt-2">Today's Menu</h1>
      </div>
    </>
  );
};

export default Header;
