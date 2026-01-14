import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Phone, Mail } from 'lucide-react';

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
            Siap Membantu Anda<br />
            <span className="text-primary">Kapan Saja!</span>
          </h2>
          <p className="text-lg text-secondary-foreground/80 mb-10">
            Ban bocor? Jangan panik! Hubungi TAMBALIN sekarang dan teknisi kami akan segera datang ke lokasi Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://wa.me/62812321745637"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:shadow-primary hover:scale-105 transition-all"
            >
              <MessageCircle size={24} />
              Hubungi via WhatsApp
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-secondary-foreground/70">
            <a href="tel:+62812321745637" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={18} />
              <span>0812-3217-45637</span>
            </a>
            <a href="mailto:Tambalin.id@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={18} />
              <span>Tambalin.id@gmail.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
