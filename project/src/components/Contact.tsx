import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-black/90" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-primary text-center mb-12"
        >
          Contact Us
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <p className="text-white font-semibold">Principal: Mr. V.N Cele</p>
                    <a href="tel:+27123456789" className="text-white/80 hover:text-primary mr-4">
                     +27 12 345 6789
                    </a>
                   <a href="mailto:vcele39@gmail.com" className="text-white/80 hover:text-primary">
                    vcele39@gmail.com
                  </a>

                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <p className="text-white font-semibold">Mr. S.P Madondo</p>
                    <a href="tel:+270796583097" className="text-white/80 hover:text-primary">
                     +27 64 662 6188 
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <a href="mailto:phuthinisecondaryschool@gmail.com" className="text-white/80 hover:text-primary">
                    phuthinisecondaryschool@gmail.com
                    </a>

                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <p className="text-white/80">
                    Phuthini Secondary School<br />
                    Loskop, Estcourt<br />
                    KwaZulu-Natal, South Africa
                  </p>
                </div>
              </div>
            </div>

            {/* Partners Section */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Our Partners</h3>
              <p className="text-white mb-4">We currently have no sponsors/partners.</p>
              <div className="flex space-x-4">
                <a
                  href="mailto:sponsorship@phuthinisecondaryschool.co.za?subject=Sponsorship Proposal"
                  className="px-6 py-3 bg-black text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-black transition-colors duration-300"
                >
                  Become a Sponsor
                </a>
                <a
                  href="mailto:partnership@phuthinisecondaryschool.co.za?subject=Partnership Proposal"
                  className="px-6 py-3 bg-black text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-black transition-colors duration-300"
                >
                  Partner with Us
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-black p-8 rounded-lg border border-primary"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  Name and Surname
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-black border-2 border-primary rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-black border-2 border-primary rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-black font-bold rounded-lg hover:bg-primary-dark transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 h-96 rounded-lg overflow-hidden border-2 border-primary"
        >
           <iframe
             className="w-full h-full border-none"
             src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d2075.2337512632766!2d29.58753629438676!3d-28.984015096796927!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDU5JzAyLjIiUyAyOcKwMzUnMTUuOSJF!5e0!3m2!1sen!2sus!4v1740786009147!5m2!1sen!2sus"
             title="Google Map showing location"
             allowFullScreen
             referrerPolicy="no-referrer-when-downgrade"
           />
        </motion.div>
      </div>
    </section>
  );
}