import ContactUs from "@/components/home/ContactUs";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import HeroSection from "@/components/home/HeroSection";
import Infosection from "@/components/home/Infosection";
import MeetOurTeam from "@/components/home/MeetOurTeam";
import OurTestimonials from "@/components/home/OurTestimonials";
import Pricing from "@/components/home/Pricing";
import Services from "@/components/home/Services";

const Home = () => {
    return (
        <div>
            <Header />
            <HeroSection/>
            <Infosection/>
            <OurTestimonials/>
            <Services/>
            <Pricing/>
            <MeetOurTeam/>
            <ContactUs/>
            <Footer/>
        </div>
    )
};

export default Home;