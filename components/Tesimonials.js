import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-10 py-20">
      <h1 className="text-4xl font-semibold text-center">Testimonials</h1>
      <div className="flex flex-col gap-16">
        <div className="flex">
          <div className="w-1/2">
            <Image
              src="/award.png"
              alt="testimonials"
              width={946}
              height={797}
            />
          </div>
          <div className="w-1/2 relative flex items-center">
            <Image
              src="/left-quote1.png"
              alt="quote"
              width={96}
              height={96}
              className="absolute top-0 left-0 w-16"
            />
            <div className="flex items-start gap-2 px-4 py-6 shadow-xl rounded-lg">
              <Image
                src="/testimonial1.png"
                alt="avatar"
                width={94}
                height={94}
              />
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-primary">
                  {" "}
                  Sed arcu, enim eu adipiscing.
                </h1>
                <p className="text-primary text-sm">
                  {" "}
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Consectetur et pretium nunc, quis euismod et. Volutpat
                  suspendisse sed in blandit condimentum. Sagittis nullam nec
                  mauris, feugiat hendrerit aliquam cras. Dolor tortor gravida
                  lobortis in ultricies enim vulputate non. Neque nibh donec
                  quam lectus.”
                </p>
                <h2>Customer</h2>
              </div>
            </div>
            <Image
              src="/left-quote2.png"
              alt="quote"
              width={96}
              height={96}
              className="absolute bottom-0 right-0 w-16"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-28">
          <div className="flex flex-col gap-4">
            <Image
              src="/testimonial2.png"
              alt="avatar"
              width={125}
              height={125}
              className="w-16"
            />
            <p className="text-sm text-primary">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              condimentum velit egestas rutrum purus. Quam velit velit nisi
              ultrices gravida est in tellus. Id in faucibus consequat hendrerit
              scelerisque maecenas massa, quis. “ -{" "}
              <span className=" text-purple">Customer</span>
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Image
              src="/testimonial3.png"
              alt="avatar"
              width={125}
              height={125}
              className="w-16"
            />
            <p className="text-sm text-primary">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              condimentum velit egestas rutrum purus. Quam velit velit nisi
              ultrices gravida est in tellus. Id in faucibus consequat hendrerit
              scelerisque maecenas massa, quis. “ -{" "}
              <span className=" text-purple">Customer</span>
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Image
              src="/testimonial4.png"
              alt="avatar"
              width={125}
              height={125}
              className="w-16"
            />
            <p className="text-sm text-primary">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              condimentum velit egestas rutrum purus. Quam velit velit nisi
              ultrices gravida est in tellus. Id in faucibus consequat hendrerit
              scelerisque maecenas massa, quis. “ -{" "}
              <span className=" text-purple">Customer</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
