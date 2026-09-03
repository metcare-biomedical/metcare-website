import Button from "../ui/Button";
import Container from "../ui/Container";
import { products } from "../../data/products";
import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";

function FeaturedProducts() {
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
            badge="Featured Products"
            title="Equip Your Facility"
            description="Explore some of the quality equipment we provide to hospitals, clinics, and healthcare facilities."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mt-14 mb-10 flex flex-wrap justify-center gap-8">
            {products.slice(0, 3).map((product) => {
              const Icon = product.icon;
              return (
                <div
                  key={product.name}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-full object-cover"
                    loading="lazy"
                    // decoding="async"
                  />

                  <div className="p-6">
                    <div className="flex items-center gap-2">
                      <div className="inline-flex rounded-xl bg-green-100 p-2 text-2xl text-green-600">
                        <Icon />
                      </div>
                      <h3 className="text-xl font-semibold">{product.name}</h3>
                    </div>

                    {/* <Button to="/products" className="mt-6 w-full">
                      Learn More
                    </Button> */}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </Container>

      <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10"
        >
          <div className="w-full flex justify-center">
            <Button to="/products">Learn more</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
