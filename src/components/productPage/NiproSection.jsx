import Container from "../ui/Container";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import image from "/public/images/products/nipro.jpg";
import Button from "../ui/Button";
import { useState } from "react";
import { nipro } from "../../data/products";

function NiproSection() {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <section className="px-20 pt-10 bg-white">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeader
              badge="Nipro Medical Equipment"
              title="Nipro Medical Philippines Corporation"
              description="Metcare Biomedical Corporation is an Authorized Distributor of Nipro Medical Philippines Corporation, offering genuine Nipro Medical Products to healthcare institutions and facilities in the Philippines.

Our authorized distribution partnership enables us to provide quality Nipro products together with reliable service and professional technical support, Check official brochures below or contact us for direct product specifications and institutional quotes."
              center={false}
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/broshures/Surdial-55Plus.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Hemodialysis Machine</Button>
              </a>

              <div className="relative inline-block">
                <AnimatePresence>
                  {showOptions && (
                    <motion.div
                      initial={{ opacity: 0, y: 100, scale: 0.95 }}
                      animate={{ opacity: 1, y: 180, scale: 1 }}
                      exit={{ opacity: 0, y: 100, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute bottom-full left-0 z-10 mb-2 flex flex-col min-w-[120px] gap-2 rounded-xl"
                    >
                      <a
                        href="/broshures/Elisio.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="w-full">Elisio</Button>
                      </a>

                      <a
                        href="/broshures/Elisio-HX.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="w-full">Elisio-HK</Button>
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Button
                  variant="secondary"
                  className="w-[120px]"
                  onClick={() => setShowOptions(!showOptions)}
                >
                  Dialyzers
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src={image}
              alt="About Metcare"
              className="sm:h-120 h-auto"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>
      </Container>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader title="Nipro Dialysis Consumables & Supplies" />

          <div className="mt-14 flex flex-wrap justify-center gap-8 mb-10">
            {nipro.map((nipro) => {
              return (
                <div
                  key={nipro.title}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white max-w-[380px] transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <img
                    src={nipro.image}
                    alt={nipro.name}
                    width={640}
                    height={256}
                    className="h-64 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />

                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{nipro.title}</h3>
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

export default NiproSection;
