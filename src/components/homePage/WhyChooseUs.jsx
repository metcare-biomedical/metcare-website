import { motion } from "framer-motion";
import Container from "../ui/Container";
import whyChooseUs from "../../data/whyChooseUs";
import SectionHeader from "../ui/SectionHeader";

function WhyChooseUs() {
  return (
    <section className="bg-slate-50/50 py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            badge="Why Choose Us"
            title="Trusted Healthcare Engineering Partner"
            description="We help hospitals, laboratories, and healthcare facilities maintain safe, accurate, and reliable medical equipment through professional biomedical engineering solutions."
            // center={false}
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-10">
            {whyChooseUs.map((service) => {
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="grid grid-cols-1 sm:grid-cols-[2fr_4fr] items-center gap-5 border rounded-md p-5 border-slate-300 bg-white transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex items-center justify-center sm:h-30 h-25">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="h-full w-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-slate-600">{service.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default WhyChooseUs;
