import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const About = () => {
  // Staggered Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.section
      id="About"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="min-h-screen w-full bg-slate-100 flex flex-col py-20 px-6 md:pl-16 pb-24"
    >
      <div className="max-w-6xl">
        {/* Main Headline */}
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-indigo-500 to-blue-400 bg-clip-text text-transparent mb-10 mt-5">
          Turning Complex Ideas into Smooth, Interactive Digital Realities
        </h1>

        {/* Bio Section */}
        <div className="space-y-6 text-slate-700 max-w-3xl mb-16 leading-relaxed">
          <p>
            I'm Dheeraj, a Frontend Developer with a passion for building
            high-performance, visually stunning web applications. My expertise
            lies in the React ecosystem, where I turn complex ideas into
            functional, user-friendly digital realities.
          </p>
          <p>
            What sets my work apart is the focus on interaction design. Using
            Tailwind CSS and Framer Motion, I create seamless transitions and
            micro-interactions that don’t just look good—they guide the user.
          </p>
        </div>

        {/* Service Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
        >
          <motion.div
            variants={cardVariants}
            className="p-8 bg-white rounded-3xl shadow-xl border border-indigo-50"
          >
            <h3 className="text-xl font-bold text-indigo-600 mb-4">
              Custom Web Development
            </h3>
            <p className="text-sm text-slate-600">
              Bespoke applications built from the ground up for scalability and speed.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="p-8 bg-white rounded-3xl shadow-xl border border-indigo-50"
          >
            <h3 className="text-xl font-bold text-indigo-600 mb-4">
              High-End Interaction
            </h3>
            <p className="text-sm text-slate-600">
              Meaningful animations using Framer Motion to create a premium brand feel.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="p-8 bg-white rounded-3xl shadow-xl border border-indigo-50"
          >
            <h3 className="text-xl font-bold text-indigo-600 mb-4">
              Responsive & SEO
            </h3>
            <p className="text-sm text-slate-600">
              Mobile-first designs that rank well and look perfect on every screen size.
            </p>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div className="mt-20 flex flex-col items-start text-left">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">
            Ready to start your project?
          </h2>
          {/* <Link
            to="Contact"
            smooth={true}
            duration={500}
            className="bg-indigo-600 text-white px-10 py-4 rounded-full font-bold hover:bg-indigo-700 transition-all cursor-pointer shadow-lg shadow-indigo-200"
          >
            Get in Touch
          </Link> */}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;

