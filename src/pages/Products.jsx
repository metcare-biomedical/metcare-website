import DiagnosticSection from "../components/productPage/DiagnosticSection";
import DigitalHealthSection from "../components/productPage/DigitalHealthSection";
import HeroSection from "../components/productPage/HeroSection";
import IcuCriticalSection from "../components/productPage/IcuCriticalSection";
import MaternalDigitalSection from "../components/productPage/MaternalDigitalSection";
import NiproSection from "../components/productPage/NiproSection";
import SterilazationSection from "../components/productPage/SterilazationSection";
import SurgicalOperatingSection from "../components/productPage/SurgicalOperatingSection";

function Products() {
    return(
        <>
        <HeroSection />
        <NiproSection />
        {/* <DiagnosticSection/> */}
        <SurgicalOperatingSection />
        <IcuCriticalSection />
        <MaternalDigitalSection />
        <SterilazationSection />
        {/* <DigitalHealthSection /> */}
        </>
    )
}

export default Products;