import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import services from "../../data/services";

function BiomedicalSection() {
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
            badge="Services"
            title="Biomedical Services"
            description="We provide specialized biomedical engineering services—including calibration, preventive maintenance, repair, installation, and technical training—to help healthcare facilities keep their medical, dental, and laboratory equipment safe, reliable, accurate, and operating efficiently."
          />
        </motion.div>

        <div className="mt-14 flex flex-wrap justify-center gap-8 mb-10">
          {services.map((service) => {
            return (
              <div
                key={service.title}
                // initial={{ opacity: 0, y: 30 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: true }}
                // transition={{ duration: 0.6 }}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white w-[380px] transition hover:-translate-y-2 hover:shadow-xl"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  width={640}
                  height={256}
                  className="h-64 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold">{service.title}</h3>

                  <p className="mt-3 text-slate-600">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default BiomedicalSection;
