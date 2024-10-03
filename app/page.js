import Customers from "@/components/Customers";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <div>
      <div className="pt-6">
        <Navbar />
      </div>
      <Hero />
      <Customers />
    </div>
  );
};
export default page;
