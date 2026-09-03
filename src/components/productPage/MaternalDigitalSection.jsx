import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import { maternal, digitalHealth } from "../../data/products";

function MaternalDigitalSection() {
  return (
    <section>
      <Container>
        <div className="mt-14 flex flex-wrap justify-center gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex h-full flex-col items-center"
          >
            <SectionHeader title="Maternal & NICU Care" />

            <div className="mt-14 flex w-full flex-1">
              {maternal.map((product) => (
                <div
                  key={product.title}
                  className="flex h-[450px] sm:h-[400px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl w-[380px]"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    width={640}
                    height={256}
                    className="h-64 w-full shrink-0 object-cover"
                    loading="lazy"
                    decoding="async"
                  />

                  <div className="flex flex-1 flex-col p-6">
                    {/* <h3 className="text-xl font-semibold">{product.title}</h3> */}

                    <p className="text-slate-600">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex h-full flex-col items-center"
          >
            <SectionHeader title="Digital Health & Dialysis" />

            <div className="mt-14 flex w-full flex-1">
              {digitalHealth.map((product) => (
                <div
                  key={product.title}
                  className="flex h-[450px] sm:h-[400px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl w-[380px]"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    width={640}
                    height={256}
                    className="h-64 w-full shrink-0 object-cover"
                    loading="lazy"
                    decoding="async"
                  />

                  <div className="flex flex-1 flex-col p-6">
                    {/* <h3 className="text-xl font-semibold">{product.title}</h3> */}

                    <p className="text-slate-600">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default MaternalDigitalSection;
