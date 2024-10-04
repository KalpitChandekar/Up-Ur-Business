import { MoveRight } from "lucide-react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="my-20 max-w-6xl mx-auto justify-center items-center flex flex-col">
      <h1 className="font-semibold text-4xl">Start your business now !!!</h1>
      <Image src="/contact.png" alt="contact" width={938} height={603} className="w-[32rem]"/>
      <button className="flex gap-2 py-2 px-4 items-center border-2 border-[#7C76BB] rounded-lg">
        Let's talk
        <MoveRight size={18} />
      </button>
    </div>
  );
};
export default Contact;
