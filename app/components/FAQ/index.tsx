"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const FAQ = () => {
  const faqData = [
    {
      id: 1,
      question: "How long does it take to build a website?",
      answer:
        "A standard business website usually takes 1–3 weeks, while e-commerce or custom solutions may take longer depending on features.",
    },
    {
      id: 2,
      question: "Do you provide hosting and domain?",
      answer:
        "Yes, we help you purchase and set up hosting and domains. You will have full ownership of your website.",
    },
    {
      id: 3,
      question: "Will my website be mobile-friendly?",
      answer:
        "Absolutely. All our websites are responsive and optimized for mobile, tablet, and desktop devices.",
    },

    {
      id: 5,
      question: "What if I need support after launch?",
      answer:
        "We provide free support for 1 month after launch. Extended maintenance packages are also available.",
    },
    {
      id: 6,
      question: "Do you integrate payment gateways for e-commerce?",
      answer:
        "Yes, we integrate secure and popular gateways like Razorpay, Stripe, PayPal, and more depending on your business needs.",
    },
    {
      id: 7,
      question: "What is a CRM and why do I need it?",
      answer:
        "A CRM (Customer Relationship Management) helps you manage leads, customers, and workflows in one place, saving time and boosting sales efficiency.",
    },
    {
      id: 8,
      question: "Can you automate my business processes?",
      answer:
        "Yes. We design custom automations for tasks like notifications, reporting, invoicing, and integrations with tools you already use.",
    },
    {
      id: 10,
      question: "Do you work with international clients?",
      answer: "Yes, we serve clients globally and accept online payments.",
    },
  ];

  return (
    <div
      id="faq-section"
      className="mx-auto max-w-7xl py-24 lg:px-8 bg-faqblue rounded-2xl my-16 faq-bg"
    >
      <h3 className="text-xl font-normal text-white text-center mb-6">FAQ</h3>
      <h2 className="text-4xl lg:text-6xl font-semibold text-center text-white">
        Frequently asked <br /> questions.
      </h2>
      <div className="w-full px-4 pt-16">
        {faqData.map((faq, index) => (
          <div
            key={faq.id}
            className={`mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 ${
              index < faqData.length - 1 ? "mb-5" : ""
            }`}
          >
            <Disclosure as="div" className={index > 0 ? "mt-2" : ""}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                    <span>{faq.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                    {faq.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
