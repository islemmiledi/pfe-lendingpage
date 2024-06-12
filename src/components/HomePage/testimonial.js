import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from "./data";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-100 py-12">
      <style>
        {`
          .slick-dots li button:hover {
            color: #f04e3c;
          }
        `}
      </style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pb-8">
          <h2 className="text-3xl font-bold text-[#f04e3c] mb-4">
            Happy Clients & Feedbacks
          </h2>
          <p className="text-lg text-gray-600">
            See what our clients have to say about us.
          </p>
        </div>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="bg-white p-6 shadow-lg flex items-start">
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 mr-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-gray-700 text-lg mb-4">
                    {testimonial.text}
                  </p>
                  <p className="text-gray-900 font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
