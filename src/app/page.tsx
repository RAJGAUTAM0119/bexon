import AboutUs from "@/components/About/AboutUs";
import BusinessCard from "@/components/businessCard/BusinessCard";
import CompanySwiper from "@/components/companySwiper/CompanySwiper";
import HeroSection from "@/components/HeroSection/HeroSection";
import Project from "@/components/projects/Project";
import Solution from "@/components/solution/Solution";

export default function Home() {
  return (
    <div>
      <div>
        <HeroSection />
        <CompanySwiper />
        <BusinessCard />
        <AboutUs /> 
        <Solution />
        {/* <Project /> */}
      </div>
    </div>
  );
}
