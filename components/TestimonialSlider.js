// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Outstanding work! The guy delivered a top-notch website with a perfect blend of sleek design and powerful functionality.',
  },
  {
    image: '/t-avt-3.png',
    name: 'Alex Johnson',
    position: 'Customer',
    message:
      'Impressive results from Toseef Akhtar. Their expertise in full-stack development transformed our web project into a seamless, high-performing solution.',
  },
  {
    image: '/t-avt-2.png',
    name: 'Taylor Smith',
    position: 'Customer',
    message:
      'Highly recommend for any web development needs. They nailed both the front-end and back-end, making our site both beautiful and reliable.',
  },
];

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation,Pagination]}
      className="h-[400px] "
    >
      {testimonialData.map((person, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* avatar,name,position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto
            xl:mx-0">
              <div className="flex flex-col text-center justify-center">
              {/* avatar */}
                <div className="mb-2 mx-auto">
                  <Image src={person.image} alt={person.name} width={100} height={100}/>
                </div>
                {/* name */}
                <div className="text-lg">{person.name}</div>
                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">{person.position}</div>
              </div>
            </div >
            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center items-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute
            xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              <div className="mb-4">
                <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"/>
              </div>
              {/* message */}
              <div className="xl:text-lg text-center md:text-left">{person.message}</div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider ;
