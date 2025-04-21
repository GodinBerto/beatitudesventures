import {
  backEndTech,
  cloudTech,
  erpTech,
  frontEndTech,
  mobileTech,
  otherTech,
  tabs,
} from "@/constant/technologies";
import { useState } from "react";

export default function TechnologiesSection() {
  const [activeTab, setActiveTab] = useState("Front-end");

  const getTechByTab = (tab: string) => {
    switch (tab) {
      case "Front-end":
        return frontEndTech;
      case "Back-end":
        return backEndTech;
      case "Mobile":
        return mobileTech;
      case "Clouds":
        return cloudTech;
      case "ERP & CRM":
        return erpTech;
      case "Other":
        return otherTech;
      default:
        return [];
    }
  };

  const techList = getTechByTab(activeTab);

  return (
    <section className="py-10 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap sm:flex-nowrap border-b border-gray-300 mb-6 overflow-x-auto scrollbar-hide gap-2 md:gap-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-3 sm:px-0 text-sm sm:text-base font-medium whitespace-nowrap ${
                activeTab === tab
                  ? "border-b-2 border-red-600 text-red-600"
                  : "text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {techList.length > 0 ? (
            techList.map((tech) => (
              <div
                key={tech.name}
                className="border-gray-200 pt-4 sm:text-left group"
              >
                <h3 className="text-lg sm:text-lg font-semibold">
                  {tech.name}
                </h3>
                <p className="text-gray-700 mt-1 text-sm">{tech.tools}</p>

                {/* Animated Border on Hover */}
                <div className="w-full relative h-[2px] mt-2 overflow-hidden">
                  {/* Base gray line */}
                  <div className="absolute top-0 left-0 h-full w-full bg-gray-200"></div>

                  {/* Animated gradient line on hover */}
                  <div
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r from-red-600 to-blue-600 w-0 group-hover:w-full transition-all duration-500 ease-out`}
                  ></div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-gray-500 text-center py-10">
              <p className="text-sm sm:text-base">
                Content for <span className="font-semibold">{activeTab}</span>{" "}
                will go here soon.
              </p>
            </div>
          )}
        </div>

        {/* <div className="mt-10 text-center sm:text-right">
          <button className="text-red-600 font-medium underline hover:text-red-800 transition">
            All technologies
          </button>
        </div> */}
      </div>
    </section>
  );
}
