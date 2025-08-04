'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const MeetOurTeam = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    const staggerContainer = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const teamMembers = [
        {
            name: "Roshan Agnihotri",
            role: "Founder & CEO",
            image: "/roshan.png"
        },
        {
            name: "Vansh Yadav",
            role: "Co-Founder",
            image: "/vansh.png"
        },
        {
            name: "Yogesh Yadav",
            role: "Co-Founder",
            image: "/roshan.png"
        }
    ];

    return (
        <div className='w-full bg-gray-800 py-20 px-4'>
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div 
                    className="text-center mb-16"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h1 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                        Meet Our Team
                    </h1>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        Meet the pillars of the company over here, our team who have years of experience in digital marketing.
                    </p>
                </motion.div>

                {/* Team Cards */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                            variants={fadeInUp}
                            whileHover={{ y: -5 }}
                        >
                            {/* Team Member Image */}
                            <div className="aspect-[4/3] overflow-hidden">
                                <img 
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            
                            {/* Team Member Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {member.role}
                                </p>
                                
                                {/* Social Icons */}
                                <div className="flex gap-3">
                                    <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200">
                                        <Mail size={20} className="text-gray-900" />
                                    </button>
                                    <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200">
                                        <Linkedin size={20} className="text-gray-900" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* See More Button */}
                <motion.div 
                    className="text-center"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <button className="bg-white text-gray-800 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200 shadow-lg">
                        See more
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default MeetOurTeam;