import Container from "../ui/Container";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

function QualityPolicySection() {
  return (
    <section className="relative w-full bg-cover bg-center bg-no-repeat py-20 lg:py-15">
      <div
        className="absolute inset-0
      bg-[url('/images/b1.jpg')]
      bg-cover bg-center bg-no-repeat
      opacity-100
      [mask-image:linear-gradient(to_bottom,black_0%,black_100%,transparent_100%)]
      [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_50%,transparent_100%)]"
      />
      <div className="relative z-10">
        <Container>
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <SectionHeader
    badge="Quality Policy"
      title="Our Commitment"
      description="METCARE Biomedical Corporation (MBC) is committed to providing reliable, accurate, and timely calibration services that consistently meet customer, statutory, regulatory, and applicable international standard requirements."
    />

    <div className="mt-8 space-y-6">
      <h3 className="text-xl font-semibold text-slate-800">
        To achieve this commitment, we shall:
      </h3>

      <ol className="list-decimal space-y-4 pl-6 text-slate-600 leading-relaxed">
        <li>
          Deliver technically valid calibration results through qualified
          personnel, appropriate calibration methods, metrologically traceable
          reference standards, and effective control of equipment,
          environmental conditions, and technical records.
        </li>

        <li>
          Conduct all calibration activities with impartiality, integrity,
          independence, confidentiality, and professional ethics.
        </li>

        <li>
          Maintain and continually improve an effective management system that
          conforms to the requirements of ISO/IEC 17025:2017 and other
          applicable statutory, regulatory, and accreditation requirements.
        </li>

        <li>
          Understand and fulfill the needs and expectations of our customers by
          providing responsive, high-quality, and value-driven services.
        </li>

        <li>
          Promote a culture of quality, technical excellence, innovation,
          collaboration, and risk-based thinking throughout the organization.
        </li>

        <li>
          Provide adequate resources, infrastructure, technology, and training
          to continually develop the competence of our personnel and support
          the achievement of organizational objectives.
        </li>
      </ol>

      <p className="text-slate-600 leading-relaxed">
        Top Management is committed to communicating this Quality Policy to all
        personnel, ensuring that it is understood, implemented, and maintained
        throughout the organization, and reviewing it periodically to ensure
        its continuing suitability and effectiveness.
      </p>
    </div>
  </motion.div>
</Container>
      </div>
    </section>
  );
}

export default QualityPolicySection;
