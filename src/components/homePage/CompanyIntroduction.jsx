import Container from "../ui/Container";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import aboutImage from "../../assets/images/about-us.webp";

function CompanyIntroduction() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeader
              badge="About Us"
              title="Trusted Biomedical Engineering Partner"
              description="METCARE Biomedical Corporation provides reliable technical solutions that help healthcare facilities maintain the accuracy,
safety, and performance of their equipment. Our services support medical, dental, and laboratory facilities through
professional calibration, preventive maintenance, and repair."
              center={false}
            />
          </motion.div>

          {/* Right */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src={aboutImage}
              alt="About Metcare"
              className="w-full"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default CompanyIntroduction;
