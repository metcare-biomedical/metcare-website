import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";

function HeroSection() {
  return (
    <section className="relative w-full bg-cover bg-center bg-no-repeat py-20 lg:py-15">
      <div
        className="absolute inset-0
      bg-[url('/images/services/bg.webp')]
      bg-cover bg-center bg-no-repeat
      opacity-80
      [mask-image:linear-gradient(to_bottom,black_0%,black_50%,transparent_100%)]
      [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_95%,transparent_100%)]"
      />
      <div className="relative z-10">
        <Container>
          <div className="">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeader
                badge="Our Products"
                title="Sales of medical, dental and laboratory equipment and consumables."
                description="Metcare Biomedical Corporation is a trusted provider of innovative and reliable healthcare solutions. We specialize in the supply, installation, and servicing of high-quality medical, dental, and laboratory equipment, as well as consumables sourced from leading global and local manufacturers. Our commitments is to support healthcare institutions with safe, efficient, and technologically advanced equipment that enhance patient care and operation efficiency."
                center={false}
              />

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/broshures/Metcare Brochure 2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>Download Our Brochure</Button>
                </a>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default HeroSection;
