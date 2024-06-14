"use client";
import Image from "next/image";
import { useState } from "react";

type ContactFormProps = {
  header: string;
  location: string;
  phone: string;
  email: string;
};

const ContactForm: React.FC<ContactFormProps> = ({
  header,
  location,
  phone,
  email,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="container mx-auto px-4 lg:px-20 py-12 lg:py-16 flex justify-center items-center">
      <div className="flex flex-col lg:flex-row justify-between items-start">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h2 className="font-bold text-4xl lg:text-6xl font-sf-pro mb-6">
            {header}
          </h2>
          <p className="text-lg text-[#606060] mb-8">
            Whether you have questions about our services, want to discuss
            <br />
            a potential collaboration, or just feel like saying hello, we&apos;d
            love <br />
            to hear from you.
          </p>
          <div className="text-gray-600 space-y-4">
            <p className="text-lg font-bold flex items-center gap-3">
              <span>
                <Image src="/map.png" alt="location" width={32} height={32} />
              </span>
              {location}
            </p>
            <p className="text-lg font-bold flex items-center gap-3">
              <span>
                <Image src="/phone.png" alt="phone" width={32} height={32} />
              </span>
              {phone}
            </p>
            <p className="text-lg font-bold flex items-center gap-3">
              <span>
                <Image src="/mail.png" alt="email" width={32} height={32} />
              </span>
              {email}
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-6">
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-6">
                <label
                  className="block text-gray-700 text-lg font-sf-pro font-bold mb-2"
                  htmlFor="firstName"
                >
                  First Name <span className="text-red-500 text-xl">*</span>
                </label>
                <input
                  className="text-gray-800 text-base font-poppins bg-[#F1F4F5] shadow appearance-none rounded-lg w-full py-3 px-4 focus:outline-none focus:shadow-outline"
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-2 mb-6 flex flex-col items-center justify-between">
                <label
                  className="block text-gray-700 text-lg font-sf-pro font-bold mb-2"
                  htmlFor="lastName"
                ></label>
                <input
                  className="text-gray-800 text-base font-poppins bg-[#F1F4F5] shadow appearance-none rounded-lg w-full py-3 px-4 focus:outline-none focus:shadow-outline"
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-6">
                <label
                  className="block text-gray-700 text-lg font-sf-pro font-bold mb-2"
                  htmlFor="email"
                >
                  Email <span className="text-red-500 text-xl">*</span>
                </label>
                <input
                  className="text-gray-800 text-base font-poppins bg-[#F1F4F5] shadow appearance-none rounded-lg w-full py-3 px-4 focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-2 mb-6">
                <label
                  className="block text-gray-700 text-lg font-sf-pro font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone <span className="text-red-500 text-xl">*</span>
                </label>
                <input
                  className="text-gray-800 text-base font-poppins bg-[#F1F4F5] shadow appearance-none rounded-lg w-full py-3 px-4 focus:outline-none focus:shadow-outline"
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-lg font-sf-pro font-bold mb-2"
                htmlFor="message"
              >
                Comment or Message
              </label>
              <textarea
                className="text-gray-800 text-base font-poppins bg-[#F1F4F5] shadow appearance-none resize-none rounded-lg w-full py-4 px-4 focus:outline-none focus:shadow-outline h-40"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-primary text-black font-poppins font-bold py-3 px-6 rounded-lg w-full hover:bg-black hover:text-white transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
