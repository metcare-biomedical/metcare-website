import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import { icuCritical } from "../../data/products";

function IcuCriticalSection() {
  return (
    <section>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader title="ICU & Critical Care" />

          <div className="mt-14 flex flex-wrap justify-center gap-8 mb-10">
            {icuCritical.map((product) => {
              return (
                <div
                  key={product.title}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white max-w-[380px] transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    width={640}
                    height={256}
                    className="h-64 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />

                  <div className="p-6">
                    {/* <h3 className="text-xl font-semibold">{product.title}</h3> */}

                    <p className="text-slate-600">{product.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default IcuCriticalSection;
