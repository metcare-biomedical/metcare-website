import Container from "../ui/Container";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import certificate from "../../data/certification";
import { useState } from "react";

function CertificationSection() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  return (
    <section className="py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            badge="Compliance, Licenses & Certifications"
            title="Standards, Accreditations & Quality Assurance"
            description="Metcare Biomedical Corporation maintains strict compliance, industry licenses, and certified quality standards to ensure safe, reliable, and seamless healthcare delivery. Explore our official certifications and regulatory accreditations that reinforce our commitment to service excellence."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap gap-10 justify-center mt-10">
            {certificate.map((cert) => (
              <div key={cert.name} className="flex w-50 flex-col items-center">
                <div className="flex h-64 w-50 items-center justify-center overflow-hidden rounded-md border-2 border-slate-300 bg-white transition hover:-translate-y-2 hover:shadow-xl">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    onClick={() => setSelectedCertificate(cert)}
                    className="h-full w-full cursor-pointer object-contain"
                  />
                </div>

                <p className="mt-2 w-full text-center font-semibold text-slate-700">
                  {cert.name}
                </p>
              </div>
            ))}

            {selectedCertificate && (
              <div
                className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-5"
                onMouseLeave={() => setSelectedCertificate(null)}
                onClick={() => setSelectedCertificate(null)}
              >
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default CertificationSection;
