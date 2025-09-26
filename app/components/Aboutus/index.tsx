import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

interface datatype {
  heading: string;
  imgSrc: string;
  paragraph: string;
  link: string;
}

const Aboutdata: datatype[] = [
  {
    heading: "Website Development",
    imgSrc: "/images/aboutus/imgOne.svg",
    paragraph:
      "Custom, responsive, and user-friendly websites designed to showcase your brand and drive results.",
    link: "Learn more",
  },
  {
    heading: "Website Maintenance",
    imgSrc: "/images/aboutus/imgTwo.svg",
    paragraph:
      "Keep your website secure, updated, and running smoothly with regular monitoring and support.",
    link: "Learn more",
  },
  {
    heading: "CRM Development",
    imgSrc: "/images/aboutus/imgThree.svg",
    paragraph:
      "Streamline your workflow with tailored CRM solutions that boost efficiency and improve customer relationships.",
    link: "Learn more",
  },
  {
    heading: "App Development",
    imgSrc: "/images/aboutus/imgOne.svg",

    paragraph:
      "Custom mobile apps designed to enhance user experience and boost productivity.",
    link: "Learn more",
  },
];

const Aboutus = () => {
  return (
    <div id="aboutus-section">
      <div className="mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative">
        <Image
          src="/images/aboutus/dots.svg"
          width={100}
          height={100}
          alt="dots-image"
          className="absolute bottom-1 -left-20"
        />
        <h3 className="text-center text-blue text-lg tracking-widest">
          OUR SERVICES
        </h3>
        <h4 className="text-center text-4xl lg:text-65xl font-bold">
          Discover what we offer.
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:my-16 gap-x-16 lg:gap-x-5">
          {Aboutdata.map((item, i) => (
            <div
              key={i}
              className="hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group"
            >
              <h4 className="text-4xl font-semibold  text-black mb-5 group-hover:text-white">
                {item.heading}
              </h4>
              <Image
                src={item.imgSrc}
                alt={item.imgSrc}
                width={100}
                height={100}
                className="mb-5"
              />
              <h4 className="text-lg font-normal text-black group-hover:text-offwhite mb-5">
                {item.paragraph}
              </h4>
              <Link
                href="/contact"
                className="text-lg font-semibold group-hover:text-white text-blue hover-underline"
              >
                {item.link}
                <ChevronRightIcon width={20} height={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
