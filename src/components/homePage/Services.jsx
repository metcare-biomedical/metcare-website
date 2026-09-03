import Container from "../ui/Container";
import servicesHome from "../../data/servicesHome";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";

function Services() {
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
            badge="Our Services"
            title="Complete biomedical care maintenance, calibration, and support to keep your equipment reliable."
            description="We provide calibration, preventive maintenance, repair, biomedical equipment rental services and sales of biomedical supplies and equipment."
          />
        </motion.div>

        <div className="mt-14 flex flex-wrap justify-center gap-8 mb-10">
          {servicesHome.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white max-w-[380px] p-8 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="inline-flex rounded-xl bg-green-100 p-4 text-2xl text-green-600">
                  <Icon />
                </div>

                <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>

                <p className="mt-3 text-slate-600">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full flex justify-center">
            <Button to="/services">Learn more</Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Services;
