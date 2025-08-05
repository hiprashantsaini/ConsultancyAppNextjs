'use client';
import { motion } from 'framer-motion';
import {
  Building2,
  FileText,
  Globe,
  GraduationCap,
  MessageCircle,
  MoreHorizontal,
  School,
  Users
} from 'lucide-react';
import { useState } from 'react';
import PlanRequest from './PlanRequest';

const Services = () => {
  const [open, setOpen] = useState<boolean>(false);
  const services = [
    {
      icon: Building2,
      title: "Hiring for Companies",
      // description: "End-to-end recruitment solutions for businesses of all sizes. We connect you with top talent across various industries.",
      description: "End-to-end recruitment solutions for businesses of all sizes. We connect you with top talent across industries.",
      color: "bg-blue-500"
    },
    {
      icon: FileText,
      title: "Resume Building",
      description: "Professional resume crafting services that highlight your strengths and get you noticed by employers.",
      color: "bg-green-500"
    },
    {
      icon: MessageCircle,
      title: "Interview Preparation",
      description: "Comprehensive interview coaching and mock sessions to boost your confidence and success rate.",
      color: "bg-purple-500"
    },
    {
      icon: GraduationCap,
      title: "Training for Freshers",
      description: "Skill development programs designed to make fresh graduates industry-ready and employable.",
      color: "bg-orange-500"
    },
    {
      icon: School,
      title: "Campus Hiring",
      description: "Strategic campus recruitment programs connecting educational institutions with leading employers.",
      color: "bg-pink-500"
    },
    {
      icon: Globe,
      title: "Remote Hiring Support",
      description: "Specialized services for remote work placements and virtual interview processes.",
      color: "bg-teal-500"
    },
    {
      icon: Users,
      title: "Career Counseling",
      description: "Personalized career guidance to help you make informed decisions about your professional journey.",
      color: "bg-indigo-500"
    },
    {
      icon: MoreHorizontal,
      title: "More..",
      description: "Explore our additional services including HR consulting, talent acquisition strategies, and more.",
      color: "bg-gray-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What we offer?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive hiring and career development solutions tailored to meet your unique needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="mt-6 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                >
                  <p className="w-full py-2 px-4 bg-[#f54afe] text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 flex justify-center items-center">
                    Learn More
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            onClick={() => setOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>

      <PlanRequest isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default Services;