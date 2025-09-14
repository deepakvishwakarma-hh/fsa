"use client";
import Slider from "react-slick";
import React, { Component, useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

// CAROUSEL DATA

interface DataType {
  profession: string;
  comment: string;
  name: string;
}

const postData: DataType[] = [
  {
    name: "mickyjones",
    profession: "Overseas Client",
    comment:
      "I had the pleasure of working with him on a small animation project, and the experience exceeded all expectations. Not only did he deliver exactly what was asked, but he went above and beyond. Their communication was clear and prompt throughout the process, and he demonstrated a strong sense of creativity and attention to detail. If you're looking for someone who takes pride in their work and delivers exceptional results, I highly recommend him. I look forward to collaborating again in the future! Thanks!",
  },
  {
    name: "Giuseppe Cela",
    profession: "Overseas Client",
    comment: "E' stato molto attento e pronto ad accogliere i suggerimenti",
  },
  {
    name: "Jessica",
    profession: "Overseas Client",
    comment:
      "Exceptional developer! From the very first project, it was clear they truly understand how to translate ideas into code. They grasped my requirements quickly, asked the right questions, and delivered a flawless implementation—exactly as I envisioned. Fast, skilled, and highly professional. Will absolutely hire again!",
  },
  {
    name: "Gautam Agrawari",
    profession: "Stemandspace",
    comment:
      "Thanks Deepak, Its always pleasure working with you, timely delivery, right advise. helps a lot for small companies like us. I look forward to working with you again in near future. All the best and keep up the good work.",
  },
];

// CAROUSEL SETTINGS

const TestimonialCard = ({
  item,
  index,
}: {
  item: DataType;
  index: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 150; // Character limit for truncated text

  const shouldTruncate = item.comment.length > maxLength;
  const displayText =
    isExpanded || !shouldTruncate
      ? item.comment
      : item.comment.substring(0, maxLength) + "...";

  return (
    <div className="relative">
      <div className="bg-white test-sha m-3 p-10 my-20 rounded-3xl h-80 flex flex-col">
        <h4 className="text-base font-medium text-testColor my-4 flex-grow">
          {displayText}
        </h4>
        {shouldTruncate && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium mb-4 self-start"
          >
            {isExpanded ? "Show less" : "Show more"}
          </button>
        )}
        <hr style={{ color: "lightgrey" }} />
        <div className="flex justify-between">
          <div>
            <h3 className="text-base font-medium pt-4 pb-2">{item.name}</h3>
            <h3 className="text-xs font-medium pb-2 opacity-50">
              {item.profession}
            </h3>
          </div>
          <div className="flex">
            <StarIcon width={20} className="star" />
            <StarIcon width={20} className="star" />
            <StarIcon width={20} className="star" />
            <StarIcon width={20} className="star" />
            <StarIcon width={20} className="star" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      // centerMode: true,
      slidesToScroll: 2,
      arrows: false,
      autoplay: false,
      speed: 500,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    return (
      <div
        className="bg-testimonial pt-40 pb-32 lg:py-32"
        id="testimonial-section"
      >
        <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 ">
          <div className="text-center">
            <h3 className="text-4xl sm:text-6xl font-bold text-black my-3">
              What our clients say about us.
            </h3>
            <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-50 lg:mr-48 my-4">
              Real stories. Real results.
            </h3>
            <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 lg:-mr-32 my-4">
              Excellence, every time.
            </h3>
          </div>

          <Slider {...settings}>
            {postData.map((item, i) => (
              <TestimonialCard key={i} item={item} index={i} />
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
