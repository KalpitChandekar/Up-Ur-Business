import Image from "next/image";

const card = [
  {
    imgUrl: "/web.png",
    width: 549,
    height: 412,
    alt: "web",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie in malesuada eget fames purus ligula luctus tellus. Habitant condimentum sit gravida praesent. ",
  },
  {
    imgUrl: "/mobile.png",
    width: 660,
    height: 495,
    alt: "mobile",
    title: "Mobile Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie in malesuada eget fames purus ligula luctus tellus. Habitant condimentum sit gravida praesent. ",
  },
  {
    imgUrl: "/Product.png",
    width: 640,
    height: 480,
    alt: "product",
    title: "Product Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie in malesuada eget fames purus ligula luctus tellus. Habitant condimentum sit gravida praesent. ",
  },
];

const Card = ({ imgUrl, alt, width, height, title, description }) => (
  <div className="rounded-2xl flex flex-col bg-primary py-8 px-4 text-center items-center">
    <Image src={imgUrl} alt={alt} width={width} height={height} />
    <h1 className="text-xl font-semibold">{title}</h1>
    <p className="text-sm text-secondary my-8">{description}</p>
    <button className="flex gap-2 py-2 w-36 justify-center border-2 border-[#7C76BB] rounded-lg">
      Learn more
    </button>
  </div>
);
const MainService = () => {
  return (
    <div className="max-w-6xl mx-auto my-20 flex flex-col gap-20 items-center justify-center">
      <div className="max-w-2xl flex flex-col gap-4 text-center">
        <h1 className="text-4xl font-semibold">Our main services</h1>
        <p className="text-primary text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quam nibh
          elit pellentesque velit netus suspendisse. Sed enim, pretium, montes,
          in ut dolor urna.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {card.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
export default MainService;
