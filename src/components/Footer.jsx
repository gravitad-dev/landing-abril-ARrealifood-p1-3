import data from "@/data/data";

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ICONS = [<FaInstagram />, <FaFacebook />, <FaLinkedin />, <FaXTwitter />];

function Footer() {
  const { text, social } = data.section7;
  return (
    <>
      <div className="h-[2px] bg-gradient-to-r from-[#343045] via-[#C0B7E8] to-[#343045] mt-[122px]"></div>

      <footer className="flex flex-col-reverse gap-3 justify-center items-center relative  min-h-[84px]">
        <p className=" text-white text-center text-[14px]">{text}</p>
        <ul>
          <li className="flex gap-[6px]">
            {social.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                className="hover:bg-[#474748] h-[28px] w-[28px] rounded-sm text-white text-[16px] flex justify-center items-center"
              >
                {ICONS[item.id]}
              </a>
            ))}
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
