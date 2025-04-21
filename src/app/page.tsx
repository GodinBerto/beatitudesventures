"use client";
import GradientBackground from "@/component/bg-gradient";
import TestimonialCard from "@/component/cards";
import TechnologiesSection from "@/component/technologies";
import { services } from "@/constant/services";
import { ArrowRight, ArrowUpRight, Box } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [selectedService, setSelectedService] = useState(services[0].title);

  return (
    <div>
      <section className="relative overflow-hidden px-6 md:px-12 py-24 text-center h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#f0f4ff] to-[#e0e7ff]">
        {/* Blurred Background Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/bg/bg2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(20px)",
            transform: "scale(1.1)", // Avoids edge clipping after blur
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            Powering <br />
            <span className="block">Next-Gen Software</span>
          </h1>
          <p className="mt-6 text-gray-800 text-base md:text-lg">
            Build scalable, secure, and intuitive platforms with our all-in-one
            software solutions. Designed to accelerate innovation, streamline
            operations, and grow your business faster.
          </p>

          <div className="mt-8 flex justify-center items-center gap-4 flex-wrap">
            <Link href="#contact-us">
              <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium shadow-md hover:opacity-90 transition flex items-center gap-2 cursor-pointer">
                Get Started <ArrowUpRight size={16} className="w-5 h-5" />
              </button>
            </Link>
            <button className="bg-white border text-gradient-to-r from-purple-500 to-red-500 border-gray-300 px-6 py-3 rounded-full text-sm font-medium hover:shadow-md transition flex items-center gap-2">
              Request Demo
              <span className="ml-1 ">
                <Box className="w-5 h-5  transition-colors duration-300 " />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="max-w-7xl mx-auto px-6 xl:px-0 py-24" id="about-us">
        <div>
          <div className="flex flex-col gap-8">
            <h1 className="text-sm border-[2px] px-3 py-1 border-gray-300 rounded-full flex justify-between w-fit text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600 font-semibold">
              About Us
            </h1>
            <div>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2 w-full flex flex-col gap-4 h-64 justify-between">
                  <h1 className="font-bold text-black text-3xl lg:text-5xl">
                    BEATITUDE {""}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
                      VENTURES
                    </span>{" "}
                    MISSION
                  </h1>
                  <p className="mt-6 text-gray-800 text-base md:text-md">
                    At Beatitude Ventures, we are dedicated to transforming
                    innovative ideas into powerful digital solutions. Our
                    mission is to empower businesses and individuals through
                    cutting-edge software that is scalable, secure, and
                    impactful. We believe in building technology that not only
                    solves problems but also inspires progress and growth.
                  </p>
                </div>
                <div className="md:w-1/2 overflow-hidden h-64">
                  <Image
                    src="/bg/bg1.png"
                    alt="Background"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                    quality={100}
                    priority
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8 mt-6 ">
                <div className="md:w-1/2"></div>
                <div className="md:w-1/2 w-full flex flex-col gap-4 border-t-[1px] border-gray-300 pt-6">
                  Our team of passionate developers, designers, and strategists
                  thrives on innovation and collaboration. With a focus on
                  client-centric development, we craft custom software, mobile
                  apps, and digital platforms that deliver real value. At
                  Beatitude Ventures, we&apos;re not just building
                  products—we&apos;re building the future of digital
                  experiences.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 xl:px-0 py-24" id="services">
        <div>
          <h1 className="text-sm border-[2px] px-3 py-1 border-gray-300 rounded-full flex justify-between w-fit text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600 font-semibold">
            Services
          </h1>
          <div className="flex flex-col gap-8 mt-6">
            <div className="max-w-xl">
              <h1 className="font-bold text-black text-3xl lg:text-5xl">
                IDEAS INTO {""}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
                  DIGITAL
                </span>{" "}
                REALITY
              </h1>
            </div>
            <div className="flex flex-col md:flex-row gap-8 xl:gap-20 mt-8">
              <div className="w-full md:w-1/4">
                <div className="flex flex-col gap-4">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="group flex flex-col gap-3"
                      onClick={() => setSelectedService(service.title)}
                    >
                      <h1
                        className={`text-lg cursor-pointer transition duration-300 ${
                          selectedService === service.title
                            ? "text-black"
                            : "text-gray-600 group-hover:text-black"
                        }`}
                      >
                        {service.title}
                      </h1>
                      <div className="w-full relative h-[2px]">
                        {/* Base line (gray) */}
                        <div
                          className={`absolute top-0 left-0 h-full w-full bg-gray-200 transition-all duration-500 ${
                            selectedService === service.title
                              ? "opacity-0"
                              : "group-hover:opacity-0"
                          }`}
                        ></div>
                        {/* Animated gradient line */}
                        <div
                          className={`absolute top-0 left-0 h-full bg-gradient-to-r from-red-600 to-blue-600 transition-all duration-500 ${
                            selectedService === service.title
                              ? "w-full"
                              : "w-0 group-hover:w-full"
                          }`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition mt-8 gap-3">
                    see more
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>

              <div className="w-full md:flex-1">
                <div className="flex flex-wrap gap-8 justify-center lg:justify-end">
                  {services
                    .filter((service) => service.title === selectedService)
                    .map((service, index) => (
                      <div
                        key={index}
                        className="flex flex-wrap gap-8 justify-center xl:justify-end"
                      >
                        {service.data.map((item, subIndex) => (
                          <div
                            key={subIndex}
                            className="flex flex-col gap-4 bg-[#F5F5F7] p-6 rounded-lg max-w-[400px] h-[220px] group justify-between"
                          >
                            <div className="flex flex-col gap-4">
                              <h1 className="text-[#2E2E2E] font-semibold text-xl transition duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-red-500 to-blue-600">
                                {item.title}
                              </h1>

                              <p className="text-gray-600">
                                {item.description}
                              </p>
                            </div>
                            <div className="w-full flex justify-end items-center">
                              <ArrowRight
                                size={20}
                                className="transition duration-300 group-hover:text-red-500"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="max-w-7xl mx-auto px-6 xl:px-0 py-24"
        id="technologies"
      >
        <div>
          <h1 className="text-sm border-[2px] px-3 py-1 border-gray-300 rounded-full flex justify-between w-fit text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600 font-semibold">
            Technologies
          </h1>
          <div className="flex flex-col gap-8 mt-6">
            <div className="max-w-xl">
              <h1 className="font-bold text-black text-3xl lg:text-5xl">
                BUILT ON {""}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
                  MODERN
                </span>{" "}
                TECHNOLOGIES
              </h1>
            </div>
          </div>
          <div>
            <TechnologiesSection />
          </div>
        </div>
      </section>

      <section>
        <div className="bg-gradient-to-br from-[#d30000] to-[#0000c7]  text-white  relative">
          <div className="h-full absolute top-0 w-full bg-black/50 z-10"></div>
          <div className="p-4 py-20 z-20 relative flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl">
              We deliver solutions for people, created by people
            </h1>
            <button className="flex items-center space-x-2 bg-white text-black px-6 py-4 rounded-md hover:bg-gray-800 transition mt-8 gap-3 hover:text-white">
              see more
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <section
        className="max-w-7xl mx-auto px-6 xl:px-0 py-24"
        id="testimonials"
      >
        <div>
          <h1 className="text-sm border-[2px] px-3 py-1 border-gray-300 rounded-full flex justify-between w-fit text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600 font-semibold">
            Testimonials
          </h1>
          <div className="flex flex-col gap-8 mt-6">
            <div className="max-w-xl">
              <h1 className="font-bold text-black text-3xl lg:text-5xl">
                WHAT OUR {""}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
                  CUSTOMERS
                </span>{" "}
                THINK
              </h1>
            </div>
            <div className="flex flex-col md:flex-row gap-8 xl:gap-20 mt-8">
              <div className="w-full md:w-1/5">
                <p className="text-lg text-gray-600">
                  Our clients trust us because we treat their products like our
                  own. We focus on their business goals, building solutions that
                  truly meet their needs — not just delivering features.
                </p>
              </div>
              {/* Cards Section */}
              <div className="flex flex-1 gap-8 ">
                <div className="flex justify-center  w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 ">
                    {/* Testimonial Card 1 */}
                    <TestimonialCard
                      name="John Doe"
                      position="HR Manager, FT Bank"
                      avatar="/ivanmagalhaes.png"
                      message="This service has been a game-changer for our business. We are now able to provide a more streamlined process and enhanced experience to our clients."
                      rating={4}
                    />
                    <TestimonialCard
                      name="Jane Smith"
                      position="Marketing Director, Time Ventures"
                      avatar="/stephenshaw.png"
                      message="The team went above and beyond to meet our expectations. Their attention to detail and customer service are unmatched."
                      rating={5}
                    />
                    <TestimonialCard
                      name="Michael Lee"
                      position="Founder, StartupCo"
                      avatar="/xuxuefeng.png"
                      message="A fantastic company that truly listens to its customers. Their solution was exactly what we were looking for to scale our business."
                      rating={4}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 xl:px-0 py-24" id="contact-us">
        <div>
          <h1 className="text-sm border-[2px] px-3 py-1 border-gray-300 rounded-full flex justify-between w-fit text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600 font-semibold">
            Contact Us
          </h1>
          <div className="flex flex-col gap-8 mt-6">
            <div className="max-w-xl">
              <h1 className="font-bold text-black text-3xl lg:text-5xl">
                GET IN {""}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
                  TOUCH
                </span>{" "}
                WITH US
              </h1>
            </div>
            {/* Modern & Unique Sentence */}
            <div className="mb-8">
              <p className="text-lg text-gray-600">
                Let&apos;s bring your ideas to life! Drop us a message, and
                we&apos;ll get back to you.
              </p>
            </div>
            <form
              // onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    // value={formData.name}
                    // onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    // value={formData.email}
                    // onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  // value={formData.message}
                  // onChange={handleChange}
                  rows={6}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Your Message"
                  required
                />
              </div>

              <div className="mt-6 text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-800 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <GradientBackground />
    </div>
  );
}
