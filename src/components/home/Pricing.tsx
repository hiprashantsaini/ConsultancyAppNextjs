'use client';
import { motion } from 'framer-motion';
import {
  Check,
  Crown,
  FileText,
  Star,
  X,
  Zap
} from 'lucide-react';
import { useState } from 'react';
import PlanRequest from './PlanRequest';

const Pricing = () => {
  const [open, setOpen] = useState(false);

  // const plans = [
  //   {
  //     name: "Starter Career Pack",
  //     subtitle: "Basic Plan",
  //     description: "Best for freshers who just need job access and basic tools",
  //     icon: FileText,
  //     monthlyPrice: 4999,
  //     yearlyPrice: 4999,
  //     color: "from-blue-500 to-blue-600",
  //     borderColor: "border-blue-200",
  //     popular: false,
  //     features: [
  //       "Access to verified job listings",
  //       "Resume upload & visibility to employers",
  //       "Online job apply feature",
  //       "Weekly job alerts (email)",
  //       "Basic career tips (via newsletter)"
  //     ]
  //   },
  //   {
  //     name: "Pro Career Pack",
  //     subtitle: "Standard Plan",
  //     description: "Best for job seekers who want profile improvement and more opportunities",
  //     icon: Zap,
  //     monthlyPrice: 9999,
  //     yearlyPrice: 9999,
  //     color: "from-purple-500 to-purple-600",
  //     borderColor: "border-purple-200",
  //     popular: true,
  //     features: [
  //       "Everything in Basic Plan",
  //       "Personalized job alerts (daily)",
  //       "Resume optimization (1-time)",
  //       "Cover letter template",
  //       "Interview preparation guide (PDF + videos)",
  //       "Priority application submission",
  //       "Interview scheduling with 2 companies/month"
  //     ]
  //   },
  //   {
  //     name: "Elite Career Pack",
  //     subtitle: "Premium Plan",
  //     description: "Best for candidates who want full guidance, networking, and maximum chances",
  //     icon: Crown,
  //     monthlyPrice: 14999,
  //     yearlyPrice: 24999,
  //     color: "from-orange-500 to-red-500",
  //     borderColor: "border-orange-200",
  //     popular: false,
  //     features: [
  //       "Everything in Standard Plan",
  //       "One-on-one career counseling (monthly)",
  //       "Mock interview sessions (2/month)",
  //       "LinkedIn profile optimization",
  //       "Access to hidden/priority employer listings",
  //       "Job tracking dashboard with follow-ups",
  //       "Direct recruiter connect (where possible)",
  //       "Interview scheduling with unlimited companies until placement"
  //     ]
  //   }
  // ];

  const plans = [
    {
      name: "Starter Career Pack",
      subtitle: "Basic Plan",
      description: "Best for freshers who just need job access and basic tools",
      icon: FileText,
      monthlyPrice: 4999,
      yearlyPrice: 4999,
      color: "from-blue-500 to-blue-600",
      borderColor: "border-blue-200",
      popular: false,
      features: [
        { name: "Access to verified job listings", available: true },
        { name: "Resume upload & visibility to employers", available: true },
        { name: "Online job apply feature", available: true },
        { name: "Weekly job alerts (email)", available: true },
        { name: "Basic career tips (via newsletter)", available: true },
        { name: "Personalized job alerts (daily)", available: false },
        { name: "Resume optimization (1-time)", available: false },
        { name: "Cover letter template", available: false },
        { name: "Interview preparation guide (PDF + videos)", available: false },
        { name: "Priority application submission", available: false },
        { name: "Interview scheduling with 2 companies/month", available: false },
        { name: "One-on-one career counseling (monthly)", available: false },
        { name: "Mock interview sessions (2/month)", available: false },
        { name: "LinkedIn profile optimization", available: false },
        // { name: "Access to hidden/priority employer listings", available: false },
        { name: "Job tracking dashboard with follow-ups", available: false },
        { name: "Direct recruiter connect (where possible)", available: false },
        { name: "Interview scheduling with unlimited companies until placement", available: false }
      ]
    },
    {
      name: "Pro Career Pack",
      subtitle: "Standard Plan",
      description: "Best for job seekers who want profile improvement and more opportunities",
      icon: Zap,
      monthlyPrice: 9999,
      yearlyPrice: 9999,
      color: "from-purple-500 to-purple-600",
      borderColor: "border-purple-200",
      popular: true,
      features: [
        { name: "Access to verified job listings", available: true },
        { name: "Resume upload & visibility to employers", available: true },
        { name: "Online job apply feature", available: true },
        { name: "Weekly job alerts (email)", available: true },
        { name: "Basic career tips (via newsletter)", available: true },
        { name: "Personalized job alerts (daily)", available: true },
        { name: "Resume optimization (1-time)", available: true },
        { name: "Cover letter template", available: true },
        { name: "Interview preparation guide (PDF + videos)", available: true },
        { name: "Priority application submission", available: true },
        { name: "Interview scheduling with 2 companies/month", available: true },
        { name: "One-on-one career counseling (monthly)", available: false },
        { name: "Mock interview sessions (2/month)", available: false },
        { name: "LinkedIn profile optimization", available: false },
        // { name: "Access to hidden/priority employer listings", available: false },
        { name: "Job tracking dashboard with follow-ups", available: false },
        { name: "Direct recruiter connect (where possible)", available: false },
        { name: "Interview scheduling with unlimited companies until placement", available: false }
      ]
    },
    {
      name: "Elite Career Pack",
      subtitle: "Premium Plan",
      description: "Best for candidates who want full guidance, networking, and maximum chances",
      icon: Crown,
      monthlyPrice: 14999,
      yearlyPrice: 24999,
      color: "from-orange-500 to-red-500",
      borderColor: "border-orange-200",
      popular: false,
      features: [
        { name: "Access to verified job listings", available: true },
        { name: "Resume upload & visibility to employers", available: true },
        { name: "Online job apply feature", available: true },
        { name: "Weekly job alerts (email)", available: true },
        { name: "Basic career tips (via newsletter)", available: true },
        { name: "Personalized job alerts (daily)", available: true },
        { name: "Resume optimization (1-time)", available: true },
        { name: "Cover letter template", available: true },
        { name: "Interview preparation guide (PDF + videos)", available: true },
        { name: "Priority application submission", available: true },
        { name: "Interview scheduling with 2 companies/month", available: true },
        { name: "One-on-one career counseling (monthly)", available: true },
        { name: "Mock interview sessions (2/month)", available: true },
        { name: "LinkedIn profile optimization", available: true },
        // { name: "Access to hidden/priority employer listings", available: true },
        { name: "Job tracking dashboard with follow-ups", available: true },
        { name: "Direct recruiter connect (where possible)", available: true },
        { name: "Interview scheduling with unlimited companies until placement", available: true }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        // ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your Career Path
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Unlock your potential with our comprehensive career development packages
          </p>

          {/* Billing Toggle  */}
          {/* <motion.div 
            className="flex items-center justify-center space-x-4 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className={`text-lg ${!isYearly ? 'text-white font-semibold' : 'text-gray-400'}`}>
              Monthly
            </span>
            <motion.button
              className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${
                isYearly ? 'bg-green-500' : 'bg-gray-600'
              }`}
              onClick={() => setIsYearly(!isYearly)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
                animate={{ x: isYearly ? 30 : 2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            <span className={`text-lg ${isYearly ? 'text-white font-semibold' : 'text-gray-400'}`}>
              Yearly
            </span>
            {isYearly && (
              <motion.div
                className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                Save up to 17%
              </motion.div>
            )}
          </motion.div> */}
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            const price = plan.monthlyPrice;
            // const originalMonthlyPrice = isYearly ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className={`relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border ${plan.borderColor} ${plan.popular ? 'ring-2 ring-purple-400 ring-opacity-50' : ''
                  } transition-all duration-300`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </motion.div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-300 mb-4">{plan.subtitle}</p>
                  <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="text-4xl font-bold text-white">₹{price.toLocaleString()}</span>
                      {/* <span className="text-gray-400">/{isYearly ? 'year' : 'month'}</span> */}
                      <span className="text-gray-400">For 3 months</span>
                    </div>
                    {/* {isYearly && (
                      <div className="text-sm text-gray-400 mt-1">
                        <span className="line-through">₹{(originalMonthlyPrice * 12).toLocaleString()}/year</span>
                        <span className="text-green-400 ml-2">Save ₹{((originalMonthlyPrice * 12) - price).toLocaleString()}</span>
                      </div>
                    )} */}
                  </div>
                </div>

                {/* Features */}
                {/* <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                    </motion.div>
                  ))}
                </div> */}

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                    >
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${feature.available ? "bg-green-500" : "bg-red-500"
                          }`}
                      >
                        {feature.available ? (
                          <Check className="w-3 h-3 text-white" />
                        ) : (
                          <X className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <span className="text-gray-300 text-sm leading-relaxed">
                        {feature.name}
                      </span>
                    </motion.div>
                  ))}
                </div>


                {/* CTA Button */}
                <motion.button
                  onClick={() => setOpen(true)}
                  className={`w-full py-4 px-6 rounded-2xl font-semibold text-white bg-gradient-to-r ${plan.color} hover:shadow-2xl transition-all duration-300`}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-gray-300 mb-6">
            Need a custom solution? We are here to help you succeed.
          </p>
          <motion.button
            className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Sales
          </motion.button>
        </motion.div>
      </div>

      <PlanRequest isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default Pricing;