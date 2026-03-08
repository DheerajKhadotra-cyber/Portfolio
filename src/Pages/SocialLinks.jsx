import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialLinks = () => {
  const socials = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      link: 'https://github.com/DheerajKhadotra-cyber',
      color: 'hover:text-slate-900'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      link: 'https://linkedin.com/in/dheeraj-khadotra-4680023b6',
      // link: 'https://linkedin.com/in/yourusername',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      link: 'https://twitter.com/yourusername',
      color: 'hover:text-sky-500'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      link: 'https://instagram.com/dheerajkhadotra',
      color: 'hover:text-pink-500'
    }
  ];

  return (
    <section id="SocialLnks" className="flex items-center gap-6">
      {socials.map((social, index) => (
        <motion.a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`text-2xl text-slate-600 transition-colors duration-300 ${social.color}`}
          title={social.name}
        >
          {social.icon}
        </motion.a>
      ))}
    </section>
  );
};

export default SocialLinks;