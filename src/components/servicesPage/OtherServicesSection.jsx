import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import {otherServices, osmosis} from "../../data/otherServices";

function OtherServicesSection() {
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
            badge="Other Services"
            title="Specialized & Facility Services"
            description="We support your hospital in managing equipment use and maintenance every day with our on-site services."
          />
        </motion.div>

        <div className="mt-14 flex flex-wrap justify-center gap-8 mb-10">
          {otherServices.map((service) => {
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

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            title="Reverse Osmosis"
            description="Reverse Osmosis System installation, repair, preventive maintenance, and supply of consumables."
          />
        </motion.div>

        <div className="mt-14 flex flex-wrap justify-center gap-8 mb-10">
          {osmosis.map((service) => {
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

export default OtherServicesSection;
