import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import standards from "../../data/standards";
import Button from "../ui/Button";

function StandardSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleStandards = showAll ? standards : standards.slice(0, 3);

  return (
    <section className="relative w-full overflow-hidden py-20 lg:py-15">
      {/* Background */}
      <div
        className="
      pointer-events-none
      absolute inset-x-0 top-0
      h-[700px]
      bg-[url('/images/b3.jpg')]
      bg-cover bg-center bg-no-repeat
      opacity-100
      [mask-image:linear-gradient(to_bottom,black_0%,black_55%,transparent_100%)]
      [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_55%,transparent_100%)]
    "
      />

      {/* Content */}
      <div className="relative z-10">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              badge="Standards"
              title="Standards used for Calibration"
              description="Accurate results start with accurate tools. We test and calibrate your machines using trusted equipment from leading global brands."
            />
          </motion.div>

          <div className="mt-14 flex flex-wrap justify-center gap-8 mb-10">
            {visibleStandards.map((standard) => (
              <motion.div
                key={`${standard.manufacturer}-${standard.model}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white w-[380px] transition hover:-translate-y-2 hover:shadow-xl"
              >
                <img
                  src={standard.image}
                  alt={standard.name}
                  width={640}
                  height={240}
                  className="h-55 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold">
                    {standard.manufacturer}
                  </h3>

                  {standard.name && (
                    <p className="mt-3 text-slate-600">
                      <span className="font-semibold text-slate-700">
                        Instrument:
                      </span>{" "}
                      {standard.name}
                    </p>
                  )}

                  {standard.model && (
                    <p className="mt-3 text-slate-600">
                      <span className="font-semibold text-slate-700">
                        Model:
                      </span>{" "}
                      {standard.model}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {standards.length > 3 && (
            <div className="flex justify-center">
              <Button onClick={() => setShowAll((prev) => !prev)}>
                {showAll ? "Show Less" : "View All Standards"}
              </Button>
            </div>
          )}
        </Container>
      </div>
    </section>
  );
}

export default StandardSection;
