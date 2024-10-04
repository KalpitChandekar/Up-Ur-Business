import { CirclePlay } from "lucide-react";
import Image from "next/image";

const Service = ({ title, imgUrl, className }) => {
  return (
    <div className={`max-w-6xl mx-auto flex items-center my-20 ${className}`}>
      <div className="w-1/2 flex flex-col gap-6">
        <h2 className="text-pink">Portfolio Service</h2>
        <h1 className="text-4xl font-semibold">{title}</h1>
        <p className="text-primary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed
          euismod quis sit gravida pharetra sit. Cursus vel enim pretium
          vulputate semper sem elit magna neque. Aliquet adipisc
        </p>
        <div className="flex gap-4 text-primary">
          <div className="flex gap-1 items-center">
            <CirclePlay size={18} className="text-purple" />
            <h1 className="border-b-2 border-purple">See live</h1>
          </div>
          <h1 className="border-b-2 border-purple">Case study</h1>
        </div>
      </div>
      <div className="w-1/2">
        <Image src={imgUrl} alt="service" width={953} height={715} />
      </div>
    </div>
  );
};
export default Service;
