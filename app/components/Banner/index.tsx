import ContactForm from "../ContactForm";
import Link from "next/link";

const Banner = () => {
  return (
    <div
      id="home-section"
      className="mx-auto max-w-7xl my-10-- sm:py-10 px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 my-16 gap-8">
        {/* COLUMN-1 */}

        <div className="mx-auto sm:mx-0 flex flex-col justify-center">
          <div className="py-3 text-center lg:text-start">
            <button className="text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black">
              WEB SOLUTIONS & AUTOMATIONS
            </button>
          </div>
          <div className="py-3 text-center lg:text-start">
            <h1 className="text-5xl font-bold text-darkpurple">
              Empowering businesses <br /> with modern websites that drive
              growth.
            </h1>
          </div>
          <div className="my-7 text-center lg:text-start">
            <Link href="/contact">
              <button className="text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hoblue">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        {/* COLUMN-2 - Contact Form */}
        <div className="lg:flex lg:justify-center lg:items-start">
          <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-sm mx-auto bg-digital">
            <ContactForm compact={true} showTitle={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
