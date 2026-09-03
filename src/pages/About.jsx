import BusinessCompetitiveSection from "../components/aboutPage/BusinessCompetitiveSection";
import CertificationSection from "../components/aboutPage/CertificationSection";
import HeroSection from "../components/aboutPage/HeroSection";
import QualityPolicySection from "../components/aboutPage/QualityPolicySection";
import VisionMissionSection from "../components/aboutPage/VisionMissionSection";

function About() {
  return (
    <>
    <HeroSection/>
    <VisionMissionSection />
    <QualityPolicySection/>
    <BusinessCompetitiveSection/>
    <CertificationSection/>
    </>
  );
}

export default About;