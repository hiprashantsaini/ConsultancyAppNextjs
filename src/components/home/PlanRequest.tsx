// "use client";

// import { AnimatePresence, motion } from "framer-motion";
// import { X } from "lucide-react";
// import { useState } from "react";

// interface PlanRequestProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export default function PlanRequest({ isOpen, onClose }: PlanRequestProps) {
//   const [formData, setFormData] = useState({
//     plan: "",
//     name: "",
//     email: "",
//     phone: "",
//     city: "",
//     notes: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Plan Request:", formData);
//     alert("Thank you! Our team will contact you shortly.");
//     onClose();
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
//         >
//           <div className="overflow-y-auto">
//             <div className="flex justify-center items-center py-2 px-2 bg-white shadow-xl rounded-2xl w-full max-w-lg mx-auto">
//               <motion.div
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.8, opacity: 0 }}
//                 className="bg-white rounded-2xl w-full max-w-lg relative max-h-[95vh] overflow-y-auto"
//               >
//                 {/* Close Button */}
//                 <button
//                   onClick={onClose}
//                   className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10 p-1 rounded-full hover:bg-gray-100"
//                 >
//                   <X size={20} />
//                 </button>

//                 <div className="p-6">
//                   <h2 className="text-2xl font-bold mb-6 text-gray-800 pr-8">Request a Plan</h2>

//                   <div onSubmit={handleSubmit} className="space-y-5">
//                     {/* Plan Selection */}
//                     <div>
//                       <label className="block text-sm font-medium mb-2 text-gray-700">
//                         Select Plan <span className="text-red-500">*</span>
//                       </label>
//                       <select
//                         name="plan"
//                         value={formData.plan}
//                         onChange={handleChange}
//                         required
//                         className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                       >
//                         <option value="">-- Choose Plan --</option>
//                         <option value="starter">Starter Career Pack</option>
//                         <option value="pro">Pro Career Pack</option>
//                         <option value="elite">Elite Career Pack</option>
//                       </select>
//                     </div>

//                     {/* Name */}
//                     <div>
//                       <label className="block text-sm font-medium mb-2 text-gray-700">
//                         Full Name <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                         placeholder="Enter your full name"
//                         className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                       />
//                     </div>

//                     {/* Email */}
//                     <div>
//                       <label className="block text-sm font-medium mb-2 text-gray-700">
//                         Email Address <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                         placeholder="your.email@example.com"
//                         className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                       />
//                     </div>

//                     {/* Phone */}
//                     <div>
//                       <label className="block text-sm font-medium mb-2 text-gray-700">
//                         Phone Number <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         required
//                         placeholder="+1 (555) 123-4567"
//                         className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                       />
//                     </div>

//                     {/* City */}
//                     <div>
//                       <label className="block text-sm font-medium mb-2 text-gray-700">
//                         City
//                       </label>
//                       <input
//                         type="text"
//                         name="city"
//                         value={formData.city}
//                         onChange={handleChange}
//                         placeholder="Enter your city"
//                         className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                       />
//                     </div>

//                     {/* Notes */}
//                     <div>
//                       <label className="block text-sm font-medium mb-2 text-gray-700">
//                         Additional Notes
//                       </label>
//                       <textarea
//                         name="notes"
//                         value={formData.notes}
//                         onChange={handleChange}
//                         rows={3}
//                         placeholder="Any additional information or special requirements..."
//                         className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
//                       />
//                     </div>

//                     {/* Required Fields Note */}
//                     <p className="text-xs text-gray-500 mt-4">
//                       <span className="text-red-500">*</span> Required fields
//                     </p>

//                     {/* Submit */}
//                     <button
//                       type="submit"
//                       onClick={handleSubmit}
//                       className="w-full bg-blue-600 text-white rounded-lg py-3 font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 mt-6"
//                     >
//                       Submit Request
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

interface PlanRequestProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  plan: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  notes: string;
}

export default function PlanRequest({ isOpen, onClose }: PlanRequestProps) {
  const [formData, setFormData] = useState<FormData>({
    plan: "",
    name: "",
    email: "",
    phone: "",
    city: "",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your plan request has been submitted successfully. Our team will contact you shortly.'
        });
        // Reset form
        setFormData({
          plan: "",
          name: "",
          email: "",
          phone: "",
          city: "",
          notes: "",
        });
        // Auto close after success (optional)
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
      console.log(error);
    }

    setIsSubmitting(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl w-full max-w-lg relative max-h-[95vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10 p-1 rounded-full hover:bg-gray-100"
            >
              <X size={20} />
            </button>

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 pr-8">Request a Plan</h2>

              {/* Status Message */}
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 p-4 rounded-lg ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-100 border border-green-400 text-green-700' 
                      : 'bg-red-100 border border-red-400 text-red-700'
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Plan Selection */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Select Plan <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="">-- Choose Plan --</option>
                    <option value="starter">Starter Career Pack</option>
                    <option value="pro">Pro Career Pack</option>
                    <option value="elite">Elite Career Pack</option>
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    placeholder="Enter your full name"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    placeholder="your.email@example.com"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    placeholder="+1 (555) 123-4567"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Enter your city"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Additional Notes
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    disabled={isSubmitting}
                    placeholder="Any additional information or special requirements..."
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Required Fields Note */}
                <p className="text-xs text-gray-500 mt-4">
                  <span className="text-red-500">*</span> Required fields
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white rounded-lg py-3 font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 mt-6 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Submit Request'
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}