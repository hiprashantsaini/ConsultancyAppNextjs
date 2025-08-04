import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import HeroSection from "@/components/services/HeroSection";
import { ReactNode } from "react";

interface LayoutProps{
    children:ReactNode;
}

const layout=({children}:LayoutProps)=>{
    return (
        <div>
            <Header/>
            <HeroSection/>
            {children}
            <Footer/>
        </div>
    )
}

export default layout;