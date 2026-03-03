import React from "react";

type TestimonialCardProps = {
  name: string;
  role: string;
  company?: string;
  image: string;
  testimonial: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  image,
  testimonial,
}) => {
  return (
    <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      {/* Quote */}
      <p className="text-gray-600 text-base leading-relaxed mb-6">
        “{testimonial}”
      </p>

      {/* User Info */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border-2 border-gray-100"
        />
        <div>
          <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">
            {role}
            {company && <span> · {company}</span>}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
