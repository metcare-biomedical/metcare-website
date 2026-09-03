import Container from "../ui/Container";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";


function BusinessCompetitiveSection() {
  return (
    <section className="relative w-full bg-cover bg-center bg-no-repeat py-20 lg:py-15">
      {/* <div
        className="absolute inset-0
      bg-[url('/images/b3.jpg')]
      bg-cover bg-center bg-no-repeat
      opacity-100
      [mask-image:linear-gradient(to_bottom,black_0%,black_100%,transparent_100%)]
      [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_50%,transparent_100%)]"
      /> */}
      <div className="relative z-10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            badge="Business Competitiveness"
            title="Partnering for Better Healthcare"
            description="Metcare Biomedical Corporation offers competitive rates and unparalled service. Its high level of equality, convenience, and the exceptional customer service experience are what it brings to its customers. Metcare aims to be your partner in quality healthcare delivery."
          />
        </motion.div>
      </Container>
      </div>
    </section>
  );
}

export default BusinessCompetitiveSection;
