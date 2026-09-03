import FeaturedProducts from "../components/homePage/FeaturedProducts";
import Hero from "../components/homePage/Hero";
import Services from "../components/homePage/Services";
import WhyChooseUs from "../components/homePage/WhyChooseUs";
import CompanyIntroduction from "../components/homePage/CompanyIntroduction";
import LatestUpdatesSection from "../components/homePage/LatestUpdatesSection";
import StandardSection from "../components/homePage/StandardSection";

function Home() {
  return (
    <>
      <Hero />
      <CompanyIntroduction />
      <Services />
      <FeaturedProducts />
      <WhyChooseUs />
      <StandardSection />
      <LatestUpdatesSection />
      {/* <Process /> */}
    </>
  );
}

export default Home;
