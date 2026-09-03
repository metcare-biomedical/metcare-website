import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";
import aboutImage from "/images/about/core-value.webp";

function VisionMissionSection() {
  return (
    <section className="py-10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-20">
            <h1 className="text-2xl font-bold text-slate-900 lg:text-3xl mb-10">
              Our Core Purpose
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="border p-4 rounded-md border-slate-300 shadow-md">
                <SectionHeader
                  badge="Vision"
                  // title="To be a leader in the provision of quality biomedical services that exceeds the expectation of our esteemed customers."
                  description="To be a leader in the provision of quality biomedical services that exceeds the expectation of our esteemed customers."
                />
              </div>
              <div className="border p-4 rounded-md border-slate-300 shadow-md">
                <SectionHeader
                  badge="Mission"
                  // title="To be a leader in the provision of quality biomedical services that exceeds the expectation of our esteemed customers."
                  description="The company is committed to provide exceptional customer services by being responsive to their needs, proactively and enthusiastic about their requirements."
                />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img src={aboutImage} alt="About Metcare" className="w-full" />
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeader
              badge="Core Value"
              description="Built on purpose and integrity, these standards reflect what we live by every day."
              center={false}
            />

            <div className="space-y-3 mt-4 text-lg">
              {[
                ["M", "astery"],
                ["E", "xcellence"],
                ["T", "rustworthy"],
                ["C", "ommitment"],
                ["A", "ccuracy"],
                ["R", "espect"],
                ["E", "nthusiasm"],
              ].map(([letter, word]) => (
                <div key={letter + word} className="flex items-center gap-3">
                  <span className="w-8 h-8 flex items-center justify-center rounded-md bg-green-100 text-green-700 font-bold text-xl">
                    {letter}
                  </span>
                  <span className="font-medium text-gray-700">{word}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default VisionMissionSection;
