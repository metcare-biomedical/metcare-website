import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import logo from "../../assets/images/logo.jpg";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaHeartbeat, FaUser } from "react-icons/fa";
import { BsBoxFill } from "react-icons/bs";
import { BiUser } from "react-icons/bi";

function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4 sm:px-40 p-10 bg-[url('/images/footer.jpg')] bg-cover bg-center text-slate-600">
        {/* Company */}
        <div className="sm:border-r border-slate-300">
          <img src={logo} alt="Metcare" className="sm:h-10  h-9" />
          {/* <h2 className="text-2xl font-bold text-white">Metcare</h2> */}

          <p className="mt-2 text-green-900 font-bold text-xl">
            Biomedical Corporation
          </p>

          <p className="mt-6 leading-7">Precision in every measure.</p>
          <p className="leading-7">Trust in every result.</p>
        </div>

        {/* Quick Links */}
        {/* <div>
            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-3">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div> */}

        {/* Equipment Rental */}
        {/* <div>
          <h3 className="text-lg font-semibold text-white">Equipment Rental</h3>

          <ul className="mt-6 space-y-3">
            <li>Critical Care Equipment</li>
            <li>Infant Care Equipment</li>
            <li>Respiratory Therapy Equipment</li>
            <li>Patient Monitoring Equipment</li>
          </ul>
        </div> */}

        {/* Services */}
        <div>
          <div className="flex gap-2 items-center">
            <div className="border rounded-full p-2 text-green-900 border-green-900">
              <FaHeartbeat size={20} />
            </div>
            <h3 className="text-lg font-semibold text-green-900">Services</h3>
          </div>

          <ul className="mt-6 space-y-4">
            <li>Calibration Services</li>
            <li>Preventive Maintenance Services</li>
            <li>Repair Services</li>
            <li>Sales and Rentals Services of Biomedical Equipments</li>
          </ul>
        </div>

        {/* Our Products */}
        <div>
          <div className="flex gap-2 items-center">
            <div className="border rounded-full p-2 text-green-900 border-green-900">
              <BsBoxFill size={20} />
            </div>
            <h3 className="text-lg font-semibold text-green-900">
              Our Products
            </h3>
          </div>
          <ul className="mt-6 space-y-5">
            <li>Medical Dental and Laboratory Equipment</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="flex gap-2 items-center">
            <div className="border rounded-full p-2 text-green-900 border-green-900">
              <FaUser size={20} />
            </div>
            <h3 className="text-lg font-semibold text-green-900">Contact</h3>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <FaLocationDot className="mt-1 text-green-900" />
              <span>
                Blk 55 Lot 19 Athens St. Town and Country Southville, Biñan
                City, 4024 Laguna
              </span>
            </div>

            <div className="flex items-center gap-3">
              <MdOutlinePhoneIphone className="text-green-900" />
              <span>(0915) 289-5621</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-green-900" />
              <span>(049) 502-6984</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-green-900" />
              <span>metcare.biomedical@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 text-center text-white text-sm bg-[#005a2b] border-t border-green-900">
        © {new Date().getFullYear()} METCARE. All rights reserved.
      </div>
      {/* <div className="h-5 w-full bg-slate-100" /> */}
    </footer>
  );
}

export default Footer;
