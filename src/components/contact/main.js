import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { contact } from "../HomePage/data";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 mt-8">
      <div className="container mx-auto py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg max-w-4xl mx-auto">
            <div className="p-4 bg-white border-b border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                  <h1
                    className="text-xl font-bold mb-2 text-center text-custom"
                    style={{ color: "#f04e3c", textAlign: "center" }}
                  >
                    CONTACT US
                  </h1>
                  <form
                    method="POST"
                    id="contactForm"
                    name="contactForm"
                    className="space-y-2"
                  >
                    <div className="flex flex-col">
                      <label
                        htmlFor="name"
                        className="text-gray-600 font-medium"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        className="input"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="email"
                        className="text-gray-600 font-medium"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="input"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="subject"
                        className="text-gray-600 font-medium"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        className="input"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="message"
                        className="text-gray-600 font-medium"
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="4"
                        placeholder="Message"
                        className="input resize-none"
                      ></textarea>
                    </div>
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="bg-[#f04e3c] text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-[#f04e3c] focus:ring-opacity-50"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-span-1 bg-[#f04e3c]">
                  <div className="text-white p-4 rounded">
                    <h3 className="text-lg font-bold mb-2">
                      Let's get in touch
                    </h3>
                    <p className="mb-2">
                      We're open for any suggestion or just to have a chat
                    </p>
                    {contact.map((item, index) => (
                      <div
                        className="flex flex-col items-center mb-4"
                        key={index}
                      >
                        <FontAwesomeIcon
                          icon={item.icon}
                          className="text-white text-2xl mb-2"
                        />
                        <div className="text-center">
                          {item.title && (
                            <span className="text-white font-bold block">
                              {item.title}
                            </span>
                          )}
                          {item.link ? (
                            <a href={item.link} className="text-white block">
                              {item.info}
                            </a>
                          ) : (
                            <p className="text-white block">{item.info}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
