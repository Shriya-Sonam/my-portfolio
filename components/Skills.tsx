"use client";
import { motion, Variants } from "framer-motion";
import { JSX } from "react";
import {
  FaReact, FaNodeJs, FaDocker, FaJava, FaPython, FaDatabase, FaAws
} from "react-icons/fa";
import {
  SiTailwindcss, SiNextdotjs, SiMongodb, SiGraphql,
  SiRedux, SiTypescript, SiJavascript, SiCplusplus, SiExpress,
  SiRedis, SiJest, SiAmazon, SiJenkins,  SiVuedotjs
} from "react-icons/si";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 150 },
  },
};

export default function Skills(): JSX.Element {
  const categories = {
    "Development": [
      { icon: <FaReact className="text-2xl text-blue-500" />, label: "React", level: 90 },
      { icon: <SiNextdotjs className="text-2xl text-black dark:text-white" />, label: "Next.js", level: 85 },
      { icon: <SiVuedotjs className="text-2xl text-indigo-600" />, label: "Vue.js", level: 70 },
      { icon: <SiTailwindcss className="text-2xl text-cyan-400" />, label: "Tailwind CSS", level: 90 },
      { icon: <SiRedux className="text-2xl text-purple-600" />, label: "Redux", level: 75 },
      { icon: <SiJavascript className="text-2xl text-yellow-500" />, label: "JavaScript", level: 95 },
      { icon: <SiTypescript className="text-2xl text-blue-600" />, label: "TypeScript", level: 85 },
      { icon: <FaNodeJs className="text-2xl text-green-600" />, label: "Node.js", level: 85 },
      { icon: <SiExpress className="text-2xl text-gray-700 dark:text-gray-300" />, label: "Express.js", level: 80 },
      { icon: <SiMongodb className="text-2xl text-green-500" />, label: "MongoDB", level: 75 },
      { icon: <SiGraphql className="text-2xl text-pink-500" />, label: "GraphQL", level: 65 },
      { icon: <FaDatabase className="text-2xl text-teal-600" />, label: "SQL", level: 70 },
      { icon: <FaPython className="text-2xl text-yellow-500" />, label: "Python", level: 85 },
      { icon: <FaJava className="text-2xl text-red-600" />, label: "Java", level: 80 },
      { icon: <SiCplusplus className="text-2xl text-indigo-600" />, label: "C++", level: 70 },


    ],
    "Tools & Others": [
      { icon: <FaDocker className="text-2xl text-blue-600" />, label: "Docker", level: 70 },
      { icon: <FaAws className="text-2xl text-orange-500" />, label: "AWS", level: 75 },
      { icon: <SiAmazon className="text-2xl text-yellow-600" />, label: "S3", level: 70 },
      { icon: <SiJest className="text-2xl text-pink-600" />, label: "Jest", level: 75 },
      { icon: <SiJenkins className="text-2xl text-pink-600" />, label: "Jenkins", level: 75 },
      { icon: <SiRedis className="text-2xl text-red-500" />, label: "Redis", level: 75 },
    ],
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-brand bg-clip-text ">
          Skills
        </h2>
        {Object.entries(categories).map(([category, skills], idx) => (
          <div key={idx} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-brand">{category}</h3>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center justify-center p-3 w-full max-w-[180px] mx-auto rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition"
                >
                  <motion.div
                    className="p-2 rounded-full mb-2"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                  >
                    {skill.icon}
                  </motion.div>

                  <p className="text-sm font-medium mb-1">{skill.label}</p>

                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                    <div
                      className="bg-brand h-1.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
