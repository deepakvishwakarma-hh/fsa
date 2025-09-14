"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import NotificationPopup from "../NotificationPopup";

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  businessTitle: string;
  location: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    businessTitle: "",
    location: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState<"success" | "error">("success");

  const services = [
    "Web Development",
    "Mobile App Development",
    "E-commerce Solutions",
    "Digital Marketing",
    "SEO Services",
    "UI/UX Design",
    "Maintenance & Support",
    "Other",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value: string, country: any) => {
    // Remove all non-digit characters
    const cleanValue = value.replace(/\D/g, "");

    // Remove country code (91) if present
    let phoneNumber = cleanValue;
    if (cleanValue.startsWith("91") && cleanValue.length > 10) {
      phoneNumber = cleanValue.substring(2);
    }

    // Limit to 10 digits for Indian mobile numbers
    phoneNumber = phoneNumber.slice(0, 10);

    setFormData((prev) => ({
      ...prev,
      phone: phoneNumber,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Debug: Log form data before submission
    console.log("Form data being submitted:", formData);

    // Validate all required fields
    const requiredFields = [
      "name",
      "email",
      "service",
      "businessTitle",
      "location",
      "message",
    ];
    const missingFields = requiredFields.filter(
      (field) => !formData[field as keyof FormData]?.trim()
    );

    if (missingFields.length > 0) {
      setPopupMessage(
        `Please fill in all required fields: ${missingFields.join(", ")}`
      );
      setPopupType("error");
      setShowPopup(true);
      setIsSubmitting(false);
      return;
    }

    // Validate phone number format - must be exactly 10 digits
    if (!formData.phone || formData.phone.length !== 10) {
      setPopupMessage("Please enter a valid 10-digit mobile number.");
      setPopupType("error");
      setShowPopup(true);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);

      if (response.ok) {
        const result = await response.json();
        console.log("Success response:", result);
        setPopupMessage("Query submitted! Our team will contact you shortly.");
        setPopupType("success");
        setShowPopup(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          businessTitle: "",
          location: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        setPopupMessage(
          `Failed to send message: ${errorData.error || "Please try again."}`
        );
        setPopupType("error");
        setShowPopup(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setPopupMessage("Failed to send message. Please try again.");
      setPopupType("error");
      setShowPopup(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-sm mx-auto bg-digital">
      <h2 className="text-xl font-bold text-darkpurple mb-4 text-center">
        Drop a Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-medium text-gray-700 mb-1"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your full name"
          />
        </div>

        {/* Phone Number Field */}
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-medium text-gray-700 mb-1"
          >
            Mobile Number *
            <span className="text-gray-500 ml-1">
              ({formData.phone.length}/10 digits)
            </span>
          </label>
          <PhoneInput
            country={"in"}
            value={formData.phone ? `91${formData.phone}` : ""}
            onChange={handlePhoneChange}
            inputProps={{
              name: "phone",
              required: true,
            }}
            inputClass="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
            buttonClass="border border-gray-300 rounded-l-md"
            containerClass="phone-input-container"
            enableSearch={false}
            disableSearchIcon={true}
            disableDropdown={true}
            placeholder="Enter 10-digit mobile number"
            masks={{ in: "..........." }}
          />
        </div>

        {/* Email and Services Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-xs font-medium mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Services Dropdown */}
          <div>
            <label htmlFor="service" className="block text-xs font-medium mb-1">
              Services *
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
              className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Business Title Field */}
        <div>
          <label
            htmlFor="businessTitle"
            className="block text-xs font-medium text-white mb-1"
          >
            Business Title *
          </label>
          <input
            type="text"
            id="businessTitle"
            name="businessTitle"
            value={formData.businessTitle}
            onChange={handleInputChange}
            required
            className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
            placeholder="What business do you have?"
          />
        </div>

        {/* Location Field */}
        <div>
          <label htmlFor="location" className="block text-xs font-medium mb-1">
            Location *
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
            className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your location"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-xs font-medium mb-1">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={3}
            className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="Tell us about your project..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="text-md font-semibold text-white bg-btnblue py-2 px-12 hover:bg-hoblue rounded-full w-full"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Popup Notification */}
      <NotificationPopup
        isVisible={showPopup}
        message={popupMessage}
        type={popupType}
        onClose={() => setShowPopup(false)}
      />
    </div>
  );
};

export default ContactForm;
