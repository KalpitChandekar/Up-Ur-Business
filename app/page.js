import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <div>
      <div className="pt-6">
        <Navbar />
      </div>
      <Hero />
    </div>
  );
};
export default page;
