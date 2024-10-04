import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-0">
      <a href="#">
        <Logo />
      </a>
      <div className="flex gap-10 ">
        <ul className="md:flex space-x-8 text-purple hidden items-center">
          <li>
            <a href="#" className="">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="">
              How we work
            </a>
          </li>
          <li>
            <a href="#" className="">
              Our team
            </a>
          </li>
          <li>
            <a href="#" className="">
              Pricing
            </a>
          </li>
        </ul>
        <button className="py-2 px-4 bg-purple text-white text-center rounded-lg">
          Book a call
        </button>
      </div>
    </div>
  );
};
export default Navbar;
