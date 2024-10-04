import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const Customers = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-0 my-20 hidden md:flex flex-col gap-8 items-center">
      <div className="flex items-center">
        <ChevronLeft size={14} />
        <h1>We work with customers brands and startups</h1>
        <ChevronRight size={14} />
      </div>
      <div className="md:max-w-4xl flex w-full justify-between items-center">
        <Image
          src="/samsung.png"
          alt="Samsung"
          width={193}
          height={43}
          className="w-auto h-auto"
        />
        <Image
          src="/google.png"
          alt="Google"
          width={129}
          height={43}
          className="w-auto h-auto"
        />
        <Image
          src="/adobe.png"
          alt="Adobe"
          width={170}
          height={43}
          className="w-auto h-auto"
        />
        <Image
          src="/spotify.png"
          alt="Spotify"
          width={143}
          height={43}
          className="w-auto h-auto"
        />
        <Image
          src="/dropbox.png"
          alt="Dropbox"
          width={218}
          height={43}
          className="w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default Customers;
