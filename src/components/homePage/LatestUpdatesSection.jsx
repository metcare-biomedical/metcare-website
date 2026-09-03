import { FaArrowRight, FaFacebook } from "react-icons/fa";
import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";

const FACEBOOK_PAGE_URL = import.meta.env.VITE_FACEBOOK_URL;

const FACEBOOK_EMBED_URL = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
  FACEBOOK_PAGE_URL,
)}&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`;

// console.log("Facebook URL:", FACEBOOK_PAGE_URL);
// console.log("Facebook embed:", FACEBOOK_EMBED_URL);

export default function LatestUpdatesSection() {
  return (
    <section className="py-20">
      <motion.div
        className="mx-auto max-w-7xl px-6 lg:px-8"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <div className="pb-10">
          <SectionHeader
            badge="Connect With Us"
            title="Latest Updates & Social Feed"
            description="Discover our latest medical equipment, completed installations, product updates, and the work we do to support healthcare facilities."
          />
        </div>

        {/* Content */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Facebook Feed */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:col-span-2">
            <div className="border-b border-slate-200 px-6 py-4">
              <div className="flex gap-4 items-center">
                <div className="text-blue-500">
                  <FaFacebook size={30} />
                </div>
                <h3 className="font-semibold text-slate-900">
                  Latest Facebook Updates
                </h3>
              </div>
            </div>

            <div className="relative flex min-h-[500px] justify-center overflow-hidden p-4">
              {/* Background */}
              <div className="absolute inset-0 bg-[url('/images/bg2.jpg')] bg-cover bg-center bg-no-repeat opacity-70" />

              {/* Content */}
              <div className="relative z-10">
                <iframe
                  src={FACEBOOK_EMBED_URL}
                  width="500"
                  height="500"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  title="Facebook Page Feed"
                  className="max-w-full"
                />
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="group relative flex min-h-[500px] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-green-700 via-green-700 to-green-900 p-8 text-white shadow-lg">
            {/* Decorative background */}
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/5" />
            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-green-400/10" />

            <svg
              className="absolute -right-20 top-1/2 h-[620px] w-[620px] -translate-y-1/2 opacity-[0.16]"
              viewBox="0 0 600 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              {/* Hexagon 1 */}{" "}
              <path
                d="M150 80 L205 48 L260 80 L260 144 L205 176 L150 144 Z"
                stroke="white"
                strokeWidth="1"
              />{" "}
       
              {/* Hexagon 3 */}{" "}
              <path
                d="M400 150 L455 118 L510 150 L510 214 L455 246 L400 214 Z"
                stroke="white"
                strokeWidth="1"
              />{" "}
      
              {/* Hexagon 5 */}{" "}
              <path
                d="M275 220 L330 188 L385 220 L385 284 L330 316 L275 284 Z"
                stroke="white"
                strokeWidth="1"
              />{" "}
         
              {/* Hexagon 7 */}{" "}
              <path
                d="M150 360 L205 328 L260 360 L260 424 L205 456 L150 424 Z"
                stroke="white"
                strokeWidth="1"
              />{" "}
      
              {/* Hexagon 9 */}{" "}
              <path
                d="M400 430 L455 398 L510 430 L510 494 L455 526 L400 494 Z"
                stroke="white"
                strokeWidth="1"
              />{" "}
      
            </svg>
            {/* Content */}
            <div className="relative z-10">
              {/* <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10 backdrop-blur-sm transition duration-300 group-hover:bg-white/15">
      <FaFacebookF size={24} />
    </div> */}

              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-green-200">
                Stay Connected
              </p>

              <h3 className="text-3xl font-bold tracking-tight">
                Follow us on Facebook
              </h3>

              <p className="mt-5 max-w-md text-base leading-7 text-green-50/90">
                Stay updated with our latest medical equipment, product
                launches, installations, deliveries, and company news.
              </p>
            </div>

            {/* Bottom CTA */}
            <div className="relative z-10 mt-12">
              <div className="mb-6 h-px w-full bg-white/10" />

              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-green-100 hidden sm:block">
                  Visit our official page
                </span>

                <a
                  href={FACEBOOK_PAGE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-green-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-50 hover:shadow-md"
                >
                  Visit Page
                  <FaArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
