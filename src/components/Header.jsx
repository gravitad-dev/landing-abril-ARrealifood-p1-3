//import CustomButton from "@/components/CustomButton";
import { Button } from "@/components/ui/button";
import logo from "@/assets/brand/logoWhite.svg";

function Header() {
  return (
    <head className="flex justify-center w-full h-[88px] fixed top-0 z-[1000] backdrop-blur-lg border-b border-white/10">
      <div className="grid grid-cols-2 md:grid-cols-3 max-w-[1300px] px-4 md:px-0 w-full items-center">
        <div className="text-xl font-bold text-white">
          <a href="/">
            <img src={logo} alt="" className="h-[80px]" />
          </a>
        </div>

        <ul className="justify-center hidden md:flex">
          <li className="flex gap-4 text-white font-semibold text-[12px]">
            <a href="#about">ABOUT</a>
            <a href="#services">OUR WORK</a>
            <a href="#project">PROJECT</a>
            <a href="#howto">WHY US</a>
            <a
              href="https://realifood.blog.jumpylife.com"
              target="_blank"
            >
              BLOG
            </a>
          </li>
        </ul>

        <div className="flex justify-end gap-4">
          <a href="#contact">
            <Button className="text-[12px]">CONTACT</Button>
          </a>
        </div>
      </div>
    </head>
  );
}

export default Header;
