import { APP_NAME } from "@/lib/constants";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./social-icons";
import { Button } from "../ui/button";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t w-full">
      <div className="wrapper flex-between flex-col md:flex-row py-5 gap-4">
        <p className="text-muted-foreground text-sm">
          {currentYear} {APP_NAME}. Created By Shahin
        </p>
        <div className="flex gap-2">
          <Button asChild variant="ghost" size="icon-lg">
            <a href="https://github.com/shahin-rahjoo" target="blank">
              <GithubIcon />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon-lg">
            <a
              href="https://www.linkedin.com/in/shahinrahjoo2000/"
              target="blank"
            >
              <LinkedinIcon />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
