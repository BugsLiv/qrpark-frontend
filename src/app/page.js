import EmergencySection from "@/components/Home/sections/EmergencySection";
import HeroSection from "@/components/Home/sections/HeroSection";
import HowItWorks from "@/components/Home/sections/HowItWorks";


export default function Home() {
  return (
  <>
    <HeroSection />
      <HowItWorks />
      <EmergencySection />
  </>
  );
}
