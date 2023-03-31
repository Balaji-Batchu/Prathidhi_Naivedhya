import { BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill } from 'react-icons/bs'
import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    company: "ABC Company",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor enim et elit imperdiet, vel mollis velit vestibulum.",
  },
  {
    id: 2,
    name: "Sesmik Tose",
    company: "XYZ Company",
    quote:
      "Sed auctor enim et elit imperdiet, vel mollis velit vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    name: "Bob Smith",
    company: "123 Company",
    quote:
      "Vel mollis velit vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor enim et elit imperdiet.",
  },
];

const Testimonials = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [slideDirection, setSlideDirection] = useState("");
  
    const handlePrevious = () => {
      setCurrentTestimonial(
        currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1
      );
      setSlideDirection("right");
    };
  
    const handleNext = () => {
      setCurrentTestimonial(
        currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1
      );
      setSlideDirection("left");
    };
  
    return (
      <div className="flex flex-col items-center justify-center mx-80 py-4">
        <h2 className="text-3xl font-bold mb-6 text-orange-400 ">Volunteers Feedback</h2>
        <div
          className={`w-3/4 flex items-center justify-between ${
            slideDirection === "left" ? "animate-slide-left" : "animate-slide-right"
          }`}
          onAnimationEnd={() => setSlideDirection("")}
        >
          <BsFillArrowLeftCircleFill
            className="h-10 w-10 cursor-pointer"
            onClick={handlePrevious}
          />
          <div className="bg-[#f1f5f9ff] shadow-lg hover:shadow-xl rounded-md p-6 mx-6 w-full">
            <div className='flex items-center gap-4 pb-4'>
                <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={`https://ui-avatars.com/api/?name=${testimonials[currentTestimonial].name}`}
                    alt={testimonials[currentTestimonial].name}
                />
                <h3 className="text-lg font-medium mb-2">
                    {testimonials[currentTestimonial].name}
                </h3>
            </div>
            <p className="mb-4">{testimonials[currentTestimonial].quote}</p>
            <p className="text-sm text-gray-600">
              {testimonials[currentTestimonial].company}
            </p>
          </div>
          <BsFillArrowRightCircleFill
            className="h-10 w-10 cursor-pointer"
            onClick={handleNext}
          />
        </div>
      </div>
    );
  };
  
  export default Testimonials;
