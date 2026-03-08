import React from 'react';
import { motion } from "framer-motion";

const Skills = () => {
  const mskills = [
    { name: "React", icon: "⚛️", desc: "SPA & Hooks", color: "from-blue-500" },
    { name: "Framer Motion", icon: "🎬", desc: "Interactive Design", color: "from-purple-500" },
    { name: "Tailwind CSS", icon: "🎨", desc: "Modern Styling", color: "from-cyan-400" },
    { name: "JavaScript", icon: "💛", desc: "ES6+ Logic", color: "from-yellow-400" },
    { name: "HTML5/CSS3", icon: "🌐", desc: "Semantic Structure", color: "from-orange-500" },
  ];

  return (
    <section id="Skills" className='min-h-screen py-20 px-6 md:px-16 bg-slate-50'>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black mb-12 text-slate-800">Technical Arsenal</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {mskills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 bg-white rounded-3xl shadow-xl border border-slate-100 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} to-white mb-6 flex items-center justify-center text-3xl shadow-lg`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{skill.name}</h3>
              <p className="text-slate-500 text-sm">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;