'use client';

import { motion } from 'framer-motion';
import { LoaderCircle } from 'lucide-react';
import { useState } from 'react';

interface FormData {
    email: string;
    subject: string;
    message: string;
}

const ContactUs = () => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);


    const fadeInLeft = {
        initial: { opacity: 0, x: -30 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    const fadeInRight = {
        initial: { opacity: 0, x: 30 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if(!formData.email || !formData.message || !formData.subject){
            alert("All field are required");
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch('/api/contact-form', {
                method: 'POST',
                headers: {
                    'Contact-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                alert('You data submitted successfully');
                setFormData({
                    email: '',
                    subject: '',
                    message: ''
                })
                setIsSubmitting(false);
            }else{
                alert('Something went wrong. Please try again.');
                setIsSubmitting(false);
            }
        } catch (error) {
                console.log("error :",error);
                alert('Something went wrong. Please try again.');
                setIsSubmitting(false);
        }
        console.log('Contact Form:', formData);
        alert('Thank you! We will get back to you soon.');
        setFormData({ email: '', subject: '', message: '' });
    };

    return (
        <div id='contact' className='w-full bg-gray-100 py-20 px-4'>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Left Side - Image */}
                    <motion.div
                        className='w-full lg:w-1/2'
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeInLeft}
                    >
                        <div className="relative overflow-hidden rounded-3xl shadow-lg">
                            <img
                                src="/contactUs.jpg"
                                alt='Team meeting discussion'
                                className="w-full h-[500px] object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Right Side - Contact Form */}
                    <motion.div
                        className='w-full lg:w-1/2'
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeInRight}
                    >
                        <div className="bg-white rounded-3xl p-7 shadow-lg">
                            {/* Header */}
                            <div className="mb-8">
                                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                                    Contact us
                                </h1>
                                <p className="text-lg text-gray-600">
                                    How can we help you?
                                </p>
                            </div>

                            {/* Contact Form */}
                            <div onSubmit={handleSubmit} className="space-y-4">
                                {/* Email Input */}
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email ID"
                                        required
                                        className="w-full border border-gray-200 rounded-xl px-6 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                    />
                                </div>

                                {/* Subject Input */}
                                <div>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Subject"
                                        required
                                        className="w-full border border-gray-200 rounded-xl px-6 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                    />
                                </div>

                                {/* Message Textarea */}
                                <div>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your Message"
                                        rows={5}
                                        required
                                        className="w-full border border-gray-200 rounded-xl px-6 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                {!isSubmitting ? <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="w-full bg-gray-800 text-white rounded-xl py-2 font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 text-lg cursor-pointer"
                                >
                                    Submit
                                </button>
                                :
                                <p
                                    className="w-full flex justify-center items-center bg-gray-800 text-white rounded-2xl py-4 font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 text-lg"
                                >
                                   <LoaderCircle className='animate-spin'/>
                                </p>
                                }
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;