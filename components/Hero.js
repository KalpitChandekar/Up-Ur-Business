import { MoveRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto flex my-10 items-center">
      <div className="w-1/2 flex flex-col gap-8">
        <h1 className="text-7xl">
          How to <span className="text-pink">level up</span> your business
        </h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est faucibus
          tellus leo non pellentesque lorem vel. Arcu magna eros, potenti duis.
        </p>
        <div className="flex gap-6">
          <button className="py-2 px-4 bg-purple text-white text-center rounded-lg">
            Book a call
          </button>
          <button className="flex gap-2 py-2 px-4 items-center border-2 border-[#7C76BB] rounded-lg">
            Let's talk
            <MoveRight size={18} />
          </button>
        </div>
      </div>
      <div className="w-1/2">
        <Image src="/hero.png" width={1163} height={888} />
      </div>
    </div>
  );
};
export default Hero;
