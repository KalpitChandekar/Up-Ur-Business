import { MapPin } from "lucide-react";
import Image from "next/image";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col px-4 md:px-0 gap-20">
      <div className="flex md:flex-row flex-col gap-16 md:gap-0 justify-between">
        <div className="flex flex-col gap-4 md:items-start items-center md:text-start text-center max-w-xs font-normal">
          <a href="#">
            <Logo />
          </a>
          <p className="text-sm text-primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
            a, ultricies sit nunc purus vel cras pellentesque.
          </p>
          <div className="flex gap-2">
            <a href="/">
              <Image
                src="/dribble.png"
                alt="facebook"
                width={49}
                height={49}
                className="w-10"
              />
            </a>
            <a href="/">
              <Image
                src="/instagram.png"
                alt="facebook"
                width={49}
                height={49}
                className="w-10"
              />
            </a>
            <a href="/">
              <Image
                src="/facebook.png"
                alt="facebook"
                width={49}
                height={49}
                className="w-10"
              />
            </a>
            <a href="/">
              <Image
                src="/twitter.png"
                alt="facebook"
                width={49}
                height={49}
                className="w-10"
              />
            </a>
          </div>
        </div>
        <ul className="flex flex-col gap-2 font-normal text-center md:text-start">
          <li className="font-semibold text-lg">About us</li>
          <li>
            <a href="#" className="text-primary text-sm">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-primary text-sm">
              How we work
            </a>
          </li>
          <li>
            <a href="#" className="text-primary text-sm">
              Our team
            </a>
          </li>
          <li>
            <a href="#" className="text-primary text-sm">
              Legal
            </a>
          </li>
        </ul>
        <div className="flex flex-col gap-2 mx-auto md:mx-0 font-normal max-w-[16rem]">
          <h1 className="text-lg font-semibold text-center md:testa">Location</h1>
          <div className="flex gap-1 items-center">
            <MapPin size={24} />
            <p className="text-primary text-sm">
              3891 Ranchview Dr. Richardson, California 62639
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <MapPin size={24} />
            <p className="text-primary text-sm">
              4517 Washington Ave. Manchester, Kentucky 39495
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start gap-3 text-sm font-normal text-primary">
          <h1 className="text-lg font-semibold text-purple">Contact us</h1>
          <p>trungkienspktnd@gmail.com</p>
          <p>207.555.0119</p>
        </div>
      </div>
      <div className="text-center flex items-center justify-center text-primary text-sm">
        <p> © 2025 Up Business by AbellVo | All Rights Reserved </p>
      </div>
    </div>
  );
};
export default Footer;
