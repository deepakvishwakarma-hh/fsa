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
    <div className="min-h-screen bg-lightgrey py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-darkpurple mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-grey max-w-2xl mx-auto">
            Ready to start your next project? We'd love to hear from you. Send
            us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form - Left Side */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                <h2 className="text-2xl font-bold text-darkpurple mb-6">
                  Send us a Message
                </h2>
                <ContactForm compact={false} showTitle={false} />
              </div>
            </div>

            {/* Contact Information - Right Side */}
            <div className="order-1 lg:order-2">
              <div className="space-y-8">
                {/* Contact Info Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-darkpurple mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-start space-x-4">
                      <div className="bg-btnblue p-3 rounded-full">
                        <EnvelopeIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-darkpurple mb-1">
                          Email
                        </h4>
                        <p className="text-grey">deepakvish7354@gmail.com</p>
                        <p className="text-grey">
                          noreply@fullstackartists.com
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start space-x-4">
                      <div className="bg-btnblue p-3 rounded-full">
                        <PhoneIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-darkpurple mb-1">
                          Phone
                        </h4>
                        <p className="text-grey">+91 98765 43210</p>
                        <p className="text-grey">+91 87654 32109</p>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start space-x-4">
                      <div className="bg-btnblue p-3 rounded-full">
                        <MapPinIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-darkpurple mb-1">
                          Address
                        </h4>
                        <p className="text-grey">
                          Fullstack Artists
                          <br />
                          Tech Hub, Innovation District
                          <br />
                          Mumbai, Maharashtra 400001
                          <br />
                          India
                        </p>
                      </div>
                    </div>

                    {/* Office Hours */}
                    <div className="flex items-start space-x-4">
                      <div className="bg-btnblue p-3 rounded-full">
                        <ClockIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-darkpurple mb-1">
                          Office Hours
                        </h4>
                        <p className="text-grey">
                          Monday - Friday: 9:00 AM - 6:00 PM
                          <br />
                          Saturday: 10:00 AM - 4:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Response Card */}
                <div className="bg-gradient-to-br from-btnblue to-navyblue rounded-2xl shadow-xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-4">Quick Response</h3>
                  <p className="text-offwhite mb-4">
                    We typically respond to all inquiries within 24 hours during
                    business days.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                      Emergency support available
                    </p>
                    <p className="flex items-center">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                      Free consultation for new projects
                    </p>
                    <p className="flex items-center">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                      24/7 technical support
                    </p>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-xl font-bold text-darkpurple mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-lightgrey hover:bg-btnblue text-darkpurple hover:text-white p-3 rounded-full transition-colors duration-300"
                      aria-label="Facebook"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-lightgrey hover:bg-btnblue text-darkpurple hover:text-white p-3 rounded-full transition-colors duration-300"
                      aria-label="Twitter"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-lightgrey hover:bg-btnblue text-darkpurple hover:text-white p-3 rounded-full transition-colors duration-300"
                      aria-label="LinkedIn"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-lightgrey hover:bg-btnblue text-darkpurple hover:text-white p-3 rounded-full transition-colors duration-300"
                      aria-label="Instagram"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z" />
                      </svg>
                    </a>
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
