import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles.js";
import { SectionWrapper} from '../hoc';
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion.js";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
      <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
        <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        >
          <div className='relative w-full h-[230px]'>
            <img
            onClick={() => window.open(source_code_link, '_blank')}
            src={image}
            alt={name}
            className='object-cover w-full h-full cursor-pointer rounded-2xl'
            />
          </div>
          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>

          <div className='flex flex-wrap gap-2 mt-4'>
            {tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
  )
}

const Works = () => {
  return (
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </motion.div>

        <div className='flex w-full'>
          <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>

        <div className='flex flex-wrap mt-20 gap-7'>
          {projects.map((project, index) => (
              <ProjectCard
                  key={`project-${index}`}
                  index={index}
                  {...project}
              />
          ))}
        </div>
      </>
  )
};

export default SectionWrapper(Works, '');
