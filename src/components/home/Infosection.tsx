'use client';
import { motion } from "framer-motion";
import { useState } from "react";

const companyValues=[
  "Our vision is to create India’s most trusted career and hiring ecosystem, where opportunities meet talent seamlessly. We aim to become the go-to platform for every individual looking to start, grow, or transform their career, and for every organization aiming to hire the best-fit professionals quickly and efficiently.",
  "Our mission is to empower job seekers with the right tools, guidance, and opportunities to achieve their career goals while helping employers connect with skilled and motivated professionals. We strive to simplify the hiring process through technology, personalized support, and continuous innovation.",
  "Our strength lies in our deep understanding of both job seekers’ aspirations and employers’ requirements. With a dedicated team, advanced technology, and personalized services like resume building, interview preparation, and job alerts, we ensure faster connections, better matches, and higher placement success rates."
]
const Infosection = () => {
    const [valuesIndex,setValueIndex]=useState(0);
    return (
        <div className='w-full my-8 space-y-8'>
            <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} className="flex flex-col sm:flex-row px-10 gap-1 sm:gap-6 max-w-6xl mx-auto">
                <div className='flex-1'>
                    <img src="/whoWeAre.jpg" alt='img' className="w-full w-[250px] h-[300px] object-cover rounded-lg" />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-center">
                    <h1 className="text-2xl font-semibold">Who we are?</h1>
                    <p>At Savior hires, we believe that the right opportunity can change lives, and the right talent can transform businesses.
                        We are a passionate team of career strategists, HR professionals, and recruitment experts committed to bridging the gap between job seekers and employers.
                    </p>
                </div>
            </motion.div>
            <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} className="flex flex-col-reverse sm:flex-row px-10 gap-1 sm:gap-6 max-w-6xl mx-auto">
                <div className="flex-1 p-6 flex flex-col justify-center ">
                    <div className="text-lg font-semibold flex items-center gap-5 mb-2">
                        <button onClick={()=>setValueIndex(0)} className={`${valuesIndex===0 ? 'px-3 py-1 rounded-md text-white bg-gray-800':''} cursor-pointer`}>Vision</button>
                        <button onClick={()=>setValueIndex(1)} className={`${valuesIndex===1 ? 'px-3 py-1 rounded-md text-white bg-gray-800':''} cursor-pointer`}>Mission</button>
                        <button onClick={()=>setValueIndex(2)} className={`${valuesIndex===2 ? 'px-3 py-1 rounded-md text-white bg-gray-800':''} cursor-pointer`}>Strength</button>
                    </div>
                    {/* <p>Our vision is to create India’s most trusted career and hiring ecosystem, where opportunities meet talent seamlessly.
                        We aim to become the go-to platform for every individual looking to start, grow, or transform their career, and for every organization aiming to hire the best-fit professionals quickly and efficiently.
                    </p> */}
                    <p>{companyValues[valuesIndex]}</p>
                </div>
                <div className='flex-1'>
                    <img src="/ourVision.jpg" alt='img' className="w-full w-[250px] h-[300px] object-cover rounded-lg" />
                </div>
            </motion.div>
        </div>
    )
}

export default Infosection;