"use client";

import ContactForm from "../components/ContactForm";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-lightgrey py-8 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-darkpurple mb-4">
            Get In Touch
          </h1>
          <p className="text-base md:text-lg text-grey max-w-2xl mx-auto">
            Ready to start your next project? We&apos;d love to hear from you.
            Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-start">
            {/* Contact Form - Left Side */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-12">
                <h2 className="text-xl sm:text-2xl font-bold text-darkpurple mb-4 md:mb-6">
                  Send us a Message
                </h2>
                <ContactForm compact={false} showTitle={false} />
              </div>
            </div>

            {/* Contact Information - Right Side */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6 md:space-y-8">
                {/* Contact Info Card */}
                <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-darkpurple mb-4 md:mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-4 md:space-y-6">
                    {/* Email */}
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className="bg-btnblue p-2 md:p-3 rounded-full flex-shrink-0">
                        <EnvelopeIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-darkpurple mb-1 text-sm md:text-base">
                          Email
                        </h4>
                        <p className="text-grey text-sm md:text-base break-all">
                          <a
                            href="mailto:deepakvish7354@gmail.com"
                            className="hover:underline hover:text-btnblue transition-colors"
                          >
                            deepakvish7354@gmail.com
                          </a>
                        </p>
                        <p className="text-grey text-sm md:text-base break-all">
                          <a
                            href="mailto:deepakv@fullstackartists.com"
                            className="hover:underline hover:text-btnblue transition-colors"
                          >
                            deepakv@fullstackartists.com
                          </a>
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className="bg-btnblue p-2 md:p-3 rounded-full flex-shrink-0">
                        <PhoneIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-darkpurple mb-1 text-sm md:text-base">
                          Phone
                        </h4>
                        <p className="text-grey text-sm md:text-base">
                          <a
                            href="tel:+919685873546"
                            className="hover:underline hover:text-btnblue transition-colors"
                          >
                            +91 96858 73546
                          </a>
                        </p>
                      </div>
                    </div>

                    {/* Office Hours */}
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className="bg-btnblue p-2 md:p-3 rounded-full flex-shrink-0">
                        <ClockIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-darkpurple mb-1 text-sm md:text-base">
                          Office Hours
                        </h4>
                        <p className="text-grey text-sm md:text-base">
                          Monday - Saturday: 10:00 AM - 6:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Response Card */}
                <div className="bg-gradient-to-br from-btnblue to-navyblue rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 text-white">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4">
                    Quick Response
                  </h3>
                  <p className="text-offwhite mb-3 md:mb-4 text-sm md:text-base">
                    We typically respond to all inquiries within 24 hours during
                    business days.
                  </p>
                  <div className="space-y-2 text-xs md:text-sm">
                    <p className="flex items-center">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                      Emergency support available
                    </p>
                    <p className="flex items-center">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                      Free consultation for new projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
