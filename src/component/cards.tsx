import React from "react";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  position: string;
  avatar: string;
  message: string;
  rating: number; // from 0 to 5
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  position,
  avatar,
  message,
  rating,
}) => {
  return (
    <div className="bg-[#F5F5F7] rounded-md p-6 w-full max-w-[400px] h-[300px] col-span-1 flex flex-col justify-between">
      <div>
        <div className="flex mb-4">
          <Image
            src={avatar}
            alt={`${name} Avatar`}
            className="rounded-full w-12 h-12 mr-4"
            width={100}
            height={100}
          />
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-gray-600">{position}</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">&quot;{message}&quot;</p>
      </div>

      <div className="flex text-yellow-400 mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-xl">
            {i < rating ? "★" : "☆"}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
