import HeroSection from "@/components/aboutus/HeroSection";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import { ReactNode } from "react";

interface LayoutProps {
    children:ReactNode;
}

const layout=({children}:LayoutProps)=>{
  return(
    <div>
       <Header/>
       <HeroSection/>
       {children}
       <Footer/>
    </div>
  )
};

export default layout;