// 'use client';

// const HeroSection = () => {
//   return (
//     <div className='relative w-full'>
//         {/* <Image src="/heroImage.jpg" alt='logo' className="object-cover" fill priority/> */}
//         <img src="/heroImage.jpg" alt='hero' className="w-full"/>
//     </div>
//   )
// }

// export default HeroSection

// 'use client';

// import { ArrowRight, Target, TrendingUp, Users } from 'lucide-react';
// import { useEffect, useState } from 'react';

// const HeroSection = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <div className="relative w-full min-h-screen overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0">
//         <img 
//           src="/heroImage.jpg" 
//           alt="Professional team collaboration" 
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-blue-900/70 sm:bg-gradient-to-r sm:from-blue-900/80 sm:via-blue-800/70 sm:to-transparent"></div>
//         <div className="absolute inset-0 bg-black/30"></div>
//       </div>

//       {/* Content Overlay */}
//       <div className="relative z-10 min-h-screen flex items-center py-20 sm:py-16">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-4xl mx-auto text-center sm:text-left">
//             {/* Main Heading */}
//             <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
//               <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
//                 Find Your Next
//                 <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
//                   Star Performer
//                 </span>
//               </h1>
//             </div>

//             {/* Subtitle */}
//             <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
//               <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto sm:mx-0 leading-relaxed">
//                 We connect exceptional talent with visionary companies. Our expert consultancy 
//                 transforms your hiring process and builds teams that drive success.
//               </p>
//             </div>

//             {/* Stats Cards */}
//             <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
//                 <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
//                   <div className="flex items-center justify-center sm:justify-start mb-2 sm:mb-3">
//                     <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mr-2 sm:mr-3 group-hover:scale-110 transition-transform duration-300" />
//                     <span className="text-xl sm:text-2xl font-bold text-white">500+</span>
//                   </div>
//                   <p className="text-gray-300 text-xs sm:text-sm text-center sm:text-left">Successful Placements</p>
//                 </div>
                
//                 <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
//                   <div className="flex items-center justify-center sm:justify-start mb-2 sm:mb-3">
//                     <Target className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mr-2 sm:mr-3 group-hover:scale-110 transition-transform duration-300" />
//                     <span className="text-xl sm:text-2xl font-bold text-white">95%</span>
//                   </div>
//                   <p className="text-gray-300 text-xs sm:text-sm text-center sm:text-left">Client Satisfaction</p>
//                 </div>
                
//                 <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
//                   <div className="flex items-center justify-center sm:justify-start mb-2 sm:mb-3">
//                     <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400 mr-2 sm:mr-3 group-hover:scale-110 transition-transform duration-300" />
//                     <span className="text-xl sm:text-2xl font-bold text-white">30%</span>
//                   </div>
//                   <p className="text-gray-300 text-xs sm:text-sm text-center sm:text-left">Faster Hiring</p>
//                 </div>
//               </div>
//             </div>

//             {/* CTA Buttons */}
//             <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
//               <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 max-w-md mx-auto sm:mx-0">
//                 <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center">
//                   Start Hiring Today
//                   <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
//                 </button>
                
//                 <button className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Floating Elements - Hidden on mobile */}
//       <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse hidden xl:block"></div>
//       <div className="absolute bottom-32 left-16 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000 hidden xl:block"></div>
      
//       {/* Scroll Indicator */}
//       <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
//           <div className="w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

'use client';

import { useEffect, useState } from 'react';
import PlanRequest from './PlanRequest';
import TypewriterText from './TypewriterText';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/heroImage.jpg" 
          alt="Professional handshake in office" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          
          {/* Main Heading */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Hiring is not easy, but<br />
              <span className="block">we make it so.</span>
            </h1>
            <h2 className='text-3xl mb-3 	text-[#ddff00] font-bold'><TypewriterText/></h2>
          </div>

          {/* Subtitle */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              We maintain communication and facilitate smooth application process 
              for our clients and recruitment cycle. We simplify hiring.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              
              {/* Post Job Order Button */}
              {/* <p className="group bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl min-w-[200px] cursor-pointer">
                <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                  Post Job Order
                </span>
              </p> */}
              
              {/* Apply Now Button */}
              <p onClick={()=>setOpen(true)} className="group border-2 border-white bg-white text-black hover:bg-black hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 min-w-[200px] cursor-pointer">
                <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                  Apply Now
                </span>
              </p>
            </div>
          </div>

          {/* Animated Elements */}
          <div className="absolute top-1/4 left-10 w-2 h-2 bg-white/60 rounded-full animate-ping hidden lg:block"></div>
          <div className="absolute top-1/3 right-16 w-3 h-3 bg-white/40 rounded-full animate-pulse hidden lg:block"></div>
          <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-white/50 rounded-full animate-bounce hidden lg:block"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <PlanRequest isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default HeroSection;