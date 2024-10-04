import Contact from "@/components/Contact";
import Customers from "@/components/Customers";
import Footer from "@/components/Footer";
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
        className={"md:flex-row flex-col"}
      />
      <Service
        title="We design investment funds website in Vietnam"
        imgUrl="/service2.png"
        className={"md:flex-row-reverse flex-col"}
      />
      <Service
        title="We help design messages app for communication"
        imgUrl="/service3.png"
        className={"md:flex-row flex-col"}
      />
      <Service
        title="We help maintenance design for customers"
        imgUrl="/service4.png"
        className={"md:flex-row-reverse flex-col"}
      />
      <MainService />
      <Testimonials />
      <Contact />
      <div className="max-w-7xl mx-auto bg-footer pt-20 pb-8">
        <Footer />
      </div>
    </div>
  );
};
export default page;
