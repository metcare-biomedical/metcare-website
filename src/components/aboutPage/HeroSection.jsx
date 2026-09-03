import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";
import aboutImage from "/images/about/building.webp";

function HeroSection() {
  return (
    <section className="relative w-full bg-cover bg-center bg-no-repeat py-20 lg:py-15">
      <div
        className="absolute inset-0
      bg-[url('/images/about/bg.webp')]
      bg-cover bg-center bg-no-repeat
      opacity-100
      [mask-image:linear-gradient(to_bottom,black_0%,black_100%,transparent_100%)]
      [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_50%,transparent_100%)]"
      />
      <div className="relative z-10">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeader
                badge="About Us"
                title="Your Trusted Biomedical Engineering Partner"
                description="At Metcare Biomedical Corporation, we provide dependable biomedical engineering solutions that help healthcare facilities operate safely, efficiently, and confidently."
                center={false}
              />

              <p className="mt-6 sm:text-lg leading-8 text-slate-600">
                Established in 2015, Metcare specializes in the preventive
                maintenance, calibration, repair, installation, and technical
                support of medical, dental, and laboratory equipment. We work
                with hospitals, clinics, laboratories, and other healthcare
                facilities to ensure their equipment remains accurate, reliable,
                and compliant with applicable standards. With a commitment to
                quality and responsive service, our experienced team helps
                healthcare providers maintain equipment performance, minimize
                downtime, and support better patient care.
              </p>
            </motion.div>

            {/* Right */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src={aboutImage}
                alt="About Metcare"
                className="w-auto sm:h-120"
              />
            </motion.div>
          </div>
          <div className="mt-6 sm:text-lg leading-8 text-slate-600">
            <motion.div
              className="flex flex-col gap-5 justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p>
                Since 2015, Metcare Biomedical Corporation has been delivering
                professional biomedical engineering services tailored to the
                needs of healthcare facilities. Our expertise covers a wide
                range of medical, dental, and laboratory equipment, providing
                clients with reliable technical support throughout the equipment
                lifecycle.
              </p>

              <p>
                Our goal is simple: to keep healthcare equipment performing at
                its best, so healthcare professionals can focus on what matters
                most—patient care.
              </p>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default HeroSection;
