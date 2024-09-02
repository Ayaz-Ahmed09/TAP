
import {FreeMode, Pagination } from 'swiper/modules';
import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { 
  RxCode, 
  RxDesign, 
  RxGrid, 
  RxLayout, 
  RxRocket, 
  RxStar, 
  RxArrowTopRight 
} from "react-icons/rx";
import { FaReact, FaJs, FaWordpress } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFramer, SiAdobexd } from "react-icons/si";

// Data
export const serviceData = [
  { id: 1, title: "React Development", description: "Building dynamic and scalable web applications with React.", icon: <FaReact /> },
  { id: 2, title: "Next.js Development", description: "Creating fast and SEO-friendly web applications using Next.js.", icon: <SiNextdotjs /> },
  { id: 3, title: "Tailwind CSS", description: "Designing responsive and modern interfaces with Tailwind CSS.", icon: <SiTailwindcss /> },
  // { id: 4, title: "UI/UX Design", description: "Designing intuitive and user-centered interfaces for web and mobile apps.", icon: <RxDesign /> },
  { id: 5, title: "HTML/CSS Development", description: "Crafting semantic and accessible HTML and CSS for web projects.", icon: <RxCode /> },
  { id: 6, title: "JavaScript Development", description: "Enhancing websites with interactive and dynamic features using JavaScript.", icon: <FaJs /> },
  { id: 7, title: "WordPress Development", description: "Building and customizing WordPress sites with themes and plugins.", icon: <FaWordpress /> },
  { id: 8, title: "Framer Motion Animations", description: "Creating smooth and interactive animations with Framer Motion.", icon: <SiFramer /> },
  { id: 9, title: "Adobe XD / PhotoShop", description: "Designing and editing visuals using Adobe XD and Photoshop.", icon: <SiAdobexd /> },
  { id: 10, title: "Performance Optimization", description: "Improving website speed and performance through various techniques.", icon: <RxRocket /> },
  { id: 11, title: "SEO Best Practices", description: "Implementing strategies to improve search engine rankings.", icon: <RxStar /> },
  { id: 12, title: "API Integration", description: "Connecting and integrating with various APIs to enhance functionality.", icon: <RxGrid /> },
  { id: 13, title: "Responsive Design", description: "Ensuring websites are fully responsive and work well on all devices.", icon: <RxLayout /> }
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 3, spaceBetween: 15 }
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className='h-[250px] sm:h-[340px]'
    >
      {serviceData.map((item) => (
        <SwiperSlide key={item.id}>
          <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
            <div className='text-4xl text-accent mb-4 '>{item.icon}</div>
            <div className='mb-8'> 
              <div className='mb-2 text-lg font-semibold'>{item.title}</div>
              <p className='text-sm max-w-[350px] leading-normal'>{item.description}</p>
            </div>
            <div className='text-3xl'>
              <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
