import Image from "next/image";
import Link from "next/link";

// QUICK LINKS DATA
interface QuickLinkType {
  id: number;
  section: string;
  link: string[];
}

const quickLinks: QuickLinkType[] = [
  {
    id: 1,
    section: "Quick Links",
    link: ["Home", "About Us", "Services", "FAQ", "Testimonials", "Contact"],
  },
  {
    id: 2,
    section: "Services",
    link: [
      "Website Development",
      "App Development",
      "Website Maintenance",
      "CRM Development",
    ],
  },
];

// Mapping function to get section links
const getSectionLink = (linkText: string): string => {
  const linkMap: { [key: string]: string } = {
    Home: "#home-section",
    "About Us": "#aboutus-section",
    Services: "#services-section",
    FAQ: "#faq-section",
    Testimonials: "#testimonial-section",
    Contact: "#contact-section",
    "Website Development": "#services-section",
    "App Development": "#services-section",
    "Website Maintenance": "#services-section",
    "CRM Development": "#services-section",
  };
  return linkMap[linkText] || "#";
};

const footer = () => {
  return (
    <div className="bg-black -mt-40" id="contact-section">
      <div className="mx-auto max-w-2xl pt-20 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* LEFT SECTION - LOGO AND MAIN CONTENT */}
          <div className="col-span-6">
            {/* MAIN HEADING */}
            <div className="mb-8">
              <h2 className="text-white text-4xl lg:text-5xl font-bold leading-tight text-center lg:text-left">
                Get Ready to
                <br />
                Grow Your Business
              </h2>
            </div>

            {/* CONTACT INFORMATION */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="mailto:deepakv@fullstackartists.com"
                className="flex items-center border border-white rounded-lg px-4 py-3 hover:bg-gray-800 transition-colors"
              >
                <span className="text-white text-sm font-medium">
                  deepakv@fullstackartists.com
                </span>
                <svg
                  className="w-4 h-4 text-white ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17l9.2-9.2M17 17V7H7"
                  />
                </svg>
              </a>
              <a
                href="tel:+919685873546"
                className="flex items-center border border-white rounded-lg px-4 py-3 hover:bg-gray-800 transition-colors"
              >
                <span className="text-white text-sm font-medium">
                  +91 96858 73546
                </span>
                <svg
                  className="w-4 h-4 text-white ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17l9.2-9.2M17 17V7H7"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT SECTION - QUICK LINKS AND SERVICES */}
          <div className="col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {quickLinks.map((link) => (
                <div key={link.id} className="group relative">
                  <p className="text-white text-xl font-bold mb-6">
                    {link.section}
                  </p>
                  <ul className="space-y-3">
                    {link.link.map((item: string, index: number) => (
                      <li key={index}>
                        <Link
                          href={getSectionLink(item)}
                          className="text-white text-sm font-normal hover:text-green-500 transition-colors"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-gray-600">
          <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-center sm:text-start text-white text-sm">
                © 2025 Fullstack Artists. All Rights Reserved.
              </h3>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4 text-sm">
              <span className="text-white">
                Made with <span className="text-yellow-400">❤️</span> by
                Fullstack Artists
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
