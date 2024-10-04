import Customers from "@/components/Customers";
import Hero from "@/components/Hero";
import MainService from "@/components/MainService";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";
import Testimonials from "@/components/Testimonials";

const page = () => {
  return (
    <div>
      <div className="pt-6">
        <Navbar />
      </div>
      <Hero />
      <Customers />
      <Service
        title="We help design a Ecommerce business shop"
        imgUrl="/service1.png"
      />
      <Service
        title="We design investment funds website in Vietnam"
        imgUrl="/service2.png"
        className={"flex-row-reverse"}
      />
      <Service
        title="We help design messages app for communication"
        imgUrl="/service3.png"
      />
      <Service
        title="We help maintenance design for customers"
        imgUrl="/service4.png"
        className={"flex-row-reverse"}
      />
      <MainService />
      <Testimonials />
    </div>
  );
};
export default page;
