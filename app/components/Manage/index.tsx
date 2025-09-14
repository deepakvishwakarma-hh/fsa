"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const names = [
  {
    heading: "Business Website",
    priceINR: 9999,
    priceDLR: 119,
    user: "Starting at",
    button: "Start Your Project",
    features: [
      "Responsive, modern design",
      "Up to 5 pages (Home, About, Services, Contact, Blog)",
      "SEO-friendly structure",
      "Fast & secure hosting setup",
      "1 Month Free Support",
    ],
    category: "yearly",
  },
  {
    heading: "E-Commerce Website",
    priceINR: 49999,
    priceDLR: 599,
    user: "Starting at",
    button: "Start Your Project",
    features: [
      "Unlimited product listings",
      "Secure payment gateway integration",
      "Order & inventory management",
      "Mobile-friendly shopping experience",
      "Delivery partner integration",
      "1 Month Free Support",
    ],
    category: "yearly",
  },
  {
    heading: "CRM & Automation",
    priceINR: 25000,
    priceDLR: 299,
    user: "Starting at",
    button: "Start Your Project",
    features: [
      "Custom CRM tailored to your business needs",
      "Role-based access control",
      "Lead & task management",
      "Reports & analytics dashboard",
      "Workflow automation",
      "Third-party API integrations",
      "Notification & reminder systems",
      "Custom dashboards",
      "1 Month Free Support",
    ],
    category: "yearly",
  },
];

const Manage = () => {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const filteredData = names;

  const getPrice = (item: any) => {
    return currency === "INR" ? item.priceINR : item.priceDLR;
  };

  const getCurrencySymbol = () => {
    return currency === "INR" ? "₹" : "$";
  };

  return (
    <div id="services-section">
      <div className="mx-auto max-w-7xl sm:py-20 lg:px-8 my-16">
        <h3 className="text-center text-4xl sm:text-65xl font-black">
          Build Your Digital Presence with Us
        </h3>
        <p className="text-center text-lg text-gray-600 mt-4">
          Affordable and scalable solutions to take your business online.
        </p>

        <div className="md:flex md:justify-around mt-10 border-y border-gray-100 py-10">
          <div className="flex gap-5 justify-center md:justify-start">
            <Image
              src="/images/manage/right.svg"
              alt="right-icon"
              width={21}
              height={14}
            />
            <h4 className="text-lg font-semibold">Free Consultation</h4>
          </div>
          <div className="flex gap-5 justify-center md:justify-start">
            <Image
              src="/images/manage/right.svg"
              alt="right-icon"
              width={21}
              height={14}
            />
            <h4 className="text-lg font-semibold">Transparent Pricing</h4>
          </div>
          <div className="flex gap-5 justify-center md:justify-start">
            <Image
              src="/images/manage/right.svg"
              alt="right-icon"
              width={21}
              height={14}
            />
            <h4 className="text-lg font-semibold">Dedicated Support</h4>
          </div>
        </div>

        <div className="mt-6 relative">
          {/* <div className="dance-text mb-5">
            💡 Get 3 months free maintenance with yearly plans
          </div> */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">Our Pricing Plans</h3>

            {/* Currency Toggle Button */}
            <div className="flex justify-center mb-8">
              <div className="bg-[whitesmoke] rounded-full p-2 flex">
                <button
                  onClick={() => setCurrency("INR")}
                  className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-200 ${
                    currency === "INR"
                      ? "bg-[#0066FF] text-white shadow-md"
                      : "bg-whitesmoke text-gray-600 hover:text-gray-800"
                  }`}
                >
                  INR
                </button>
                <button
                  onClick={() => setCurrency("USD")}
                  className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-200 ${
                    currency === "USD"
                      ? "bg-[#0066FF] text-white shadow-md"
                      : "bg-whitesmoke text-gray-600 hover:text-gray-800"
                  }`}
                >
                  USD
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-14 manage">
          {filteredData.map((items, i) => (
            <div className="manageTabs text-center p-10" key={i}>
              <h4 className="text-2xl font-bold mb-3">{items.heading}</h4>
              <h2 className="text-5xl sm:text-65xl font-extrabold mb-3">
                {getCurrencySymbol()}
                {getPrice(items).toLocaleString()}
              </h2>
              <p className="text-sm font-medium text-darkgrey mb-6">
                {items.user}
              </p>
              <Link href="/contact">
                <button className="text-sm font-bold text-blue bg-transparent hover:bg-blue hover:text-white border-2 border-blue rounded-full py-4 px-12 mb-6">
                  🚀 {items.button}
                </button>
              </Link>
              <hr style={{ color: "darkgrey", width: "50%", margin: "auto" }} />
              <div className="mt-6">
                {items.features.map((feature, featureIndex) => (
                  <h3
                    key={featureIndex}
                    className="text-sm font-medium text-darkgrey mb-3"
                  >
                    ✅ {feature}
                  </h3>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Manage;
