import { Button } from "../@/components/ui/button";
import Logo from "../src/assets/flipdish_logo.png";
import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <nav className="flex flex-row justify-between items-center ml-10">
        <div>
          <a
            target="_blank"
            href="https://github.com/mutaremalcolm/flipdish_assesment"
          >
            <Button
              className="flex flex-row gap-2 transition ease-in-out duration-150 hover:scale-110"
              size={"sm"}
            >
              <FaExternalLinkSquareAlt size={50} color="#001f40" />
              <span className="hidden sm:block">Project Source Code</span>
            </Button>
          </a>
        </div>
        <div className="flex flex-row justify-center ">
          <img
            src={Logo}
            alt="logo"
            height={200}
            className="mx-auto"
            width={300}
          />
        </div>
        <div className="flex flex-row gap-2 mr-5">
          <a
            target="_blank"
            href="https://github.com/mutaremalcolm/flipdish_assesment"
          >
            <Button variant="outline">
              <FaLinkedin size={40} color="#001f40" />
            </Button>
          </a>

          <a
            target="_blank"
            href="https://github.com/mutaremalcolm/flipdish_assesment"
          >
            <Button>
              <FaSquareGithub size={40} color="#001f40" />
            </Button>
          </a>
        </div>
      </nav>
      <div >
        <span className="font-semibold">FlipDish Assessment</span>
        <h1 >
          Today's Menu
        </h1>
      </div>
    </>
  );
};

export default Header;
