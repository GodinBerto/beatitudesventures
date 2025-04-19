import GradientBackground from "@/component/bg-gradient";
import { ArrowUpRight, Box } from "lucide-react";
import Image from "next/image";

export default function Home() {
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
            <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium shadow-md hover:opacity-90 transition flex items-center gap-2">
              Get Started <ArrowUpRight size={16} className="w-5 h-5" />
            </button>
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
      <section className="max-w-7xl mx-auto px-6 xl:px-0 py-24">
        <div>
          <div className="flex flex-col gap-8">
            <h1 className="text-sm border-[2px] px-3 py-1 border-gray-300 rounded-full flex justify-between w-fit text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600 font-semibold">
              About Us
            </h1>
            <div>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2 w-full flex flex-col gap-4">
                  <h1 className="font-bold text-black text-3xl lg:text-5xl">
                    BEATITUDE
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
                      VENTURES
                    </span>{" "}
                    MISSION
                  </h1>
                  <p className="mt-6 text-gray-800 text-base md:text-md">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum obcaecati pariatur odio enim, tenetur dolores
                    inventore illum architecto? Beatae aliquam totam quibusdam!
                    Voluptate adipisci maiores voluptatibus optio, error labore
                    reprehenderit?
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
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex,
                  esse et alias beatae blanditiis odit nostrum reiciendis dolore
                  ipsum praesentium? Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Corporis eum eius explicabo autem?
                  Exercitationem nihil eveniet aspernatur, numquam quas
                  assumenda!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <GradientBackground />
    </div>
  );
}
