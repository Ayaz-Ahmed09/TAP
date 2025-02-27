
import ServiceSlider from '../../components/ServiceSlider'
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from "../../variants";



const Services = () => {
  return(
     <div className='h-full bg-primary/30 py-36 flex items-center'>
    <Circles/>
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
          <motion.h2 variants={fadeIn('up',0.3)} initial='hidden' exit='hidden' animate='show' className='h2 xl:mt-8'>
            My Services<span className='text-accent'>.</span>
          </motion.h2>
          <motion.p variants={fadeIn('up',0.6)} initial='hidden' exit='hidden' animate='show' className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
          Offering expert development and design services including React, Next.js, and Tailwind CSS, along with UI/UX design and performance optimization to build and enhance modern web applications.
          </motion.p>
        </div>
        <motion.div variants={fadeIn('down',0.8)} initial='hidden' exit='hidden' animate='show' className='w-full xl:max-w-[65%]'>
       <ServiceSlider/>
        </motion.div>
      </div>
    </div>
    <Bulb/>
  </div>
  );
};

export default Services;
