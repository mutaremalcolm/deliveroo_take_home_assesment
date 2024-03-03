import { Button } from "../@/components/ui/button";
import { ExternalLink, LinkedinIcon } from "lucide-react";

const Header = () => {
  return (
    <nav className="flex flex-row justify-between">
        <div className="mb-2 md:mb-0">
          <a
            target="_blank"
            href="https://github.com/mutaremalcolm/flipdish_assesment"
          >
            <Button
            className="flex flex-row gap-2 transition ease-in-out duration-150 hover:scale-110"
            size={"sm"}
            >
              <ExternalLink size={20} />
              <span className="hidden sm:block">Project Source Code</span>
            </Button>
          </a>
        </div>
        <div className="flex flex-row gap-2">
        <a
          target="_blank"
          href="https://github.com/mutaremalcolm/flipdish_assesment"
        >
          <Button>
            <LinkedinIcon size={20} />
          </Button>
        </a>

        <a
          target="_blank"
          href="https://github.com/mutaremalcolm/flipdish_assesment"
        >
          <Button>
            <LinkedinIcon size={20} />
          </Button>
        </a>
        </div>
    </nav>
  );
};

export default Header;
