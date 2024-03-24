import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles.js";
import { services } from "../constants/index.js";
import { fadeIn, textVariant } from "../utils/motion.js";

import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return(
      <Tilt className='xs:w-[250px] w-full'>
        <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
        <img src={icon}  alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
        </motion.div>
        </Tilt>
  )
}

const About = () => {
  return (
      <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

          <motion.p variants={fadeIn('', '', 0.1, 1)}
                    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
              As a Frontend Developer, I've specialized in creating exceptional user experiences and intuitive
              interfaces across various digital platforms. My journey has equipped me with a robust set of skills,
              centered around React.js, that enables me to bring creative solutions to life, enhancing user engagement
              and satisfaction.
              <br/>
              <br/>
              My experience spans developing a pioneering online betting platform, which revolutionized the
              digitalization of ticket games, allowing users to engage across multiple categories seamlessly.
              Additionally, I played a key role in the development of a cross-platform lottery app, showcasing my
              ability to adapt and innovate within the tech space.
              <br/>
              <br/>
              Working within Agile frameworks, I've contributed to dynamic teams, embracing change to maximize project
              value and efficiency. My technical toolkit includes React.js, Postman API, among over 20 other skills,
              allowing me to tackle complex challenges and drive forward with effective, user-centric solutions.
              <br/>
              <br/>
              I'm passionate about leveraging technology to create meaningful, impactful digital experiences. Let's
              connect to explore how we can create something remarkable together.
          </motion.p>

          <div className='mt-20 flex flex-wrap gap-10'>
          {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </>
  )
};

export default SectionWrapper(About, 'about');
