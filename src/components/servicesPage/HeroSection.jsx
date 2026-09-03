import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";

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
        <div className="grid items-center gap-16 lg:grid-cols-[4fr_2fr]">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeader
              badge="Our Services"
              title="Complete biomedical care-maintenance, calibration, and support to keep your equipment reliable."
              description="Founded in 2015, Metcare Biomedical Corporation specializes in comprehensive biomedical services, offering expert calibration, preventive maintenance, and repair for medical, dental, and laboratory equipment."
              center={false}
            />

            {/* <p className="mt-6 leading-8 text-slate-600">
              We specialize in preventive maintenance, calibration, repair,
              installation, and technical support for a wide range of medical
              devices. Our experienced team is dedicated to delivering quality
              service that supports better patient care.
            </p> */}
          </motion.div>

          {/* Right */}
          {/* <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src={aboutImage}
              alt="About Metcare"
              className="w-full rounded-3xl shadow-xl"
            />
          </motion.div> */}
        </div>
      </Container>
      </div>
    </section>
  );
}

export default HeroSection;
