import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertTriangle, Smartphone, Check } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tentang" className="py-20 md:py-28 bg-muted" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Tentang Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Apa Itu <span className="text-primary">TAMBALIN</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solusi digital untuk masalah ban bocor di jalan
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-3xl p-8 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-destructive/10 rounded-2xl flex items-center justify-center">
                <AlertTriangle className="text-destructive" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Masalah</h3>
            </div>
            <ul className="space-y-4">
              {[
                'Sulit mencari tukang tambal saat ban bocor mendadak',
                'Tidak tahu estimasi harga, rawan ditipu',
                'Susah menemukan layanan di malam hari',
                'Harus menunggu lama tanpa kepastian',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-6 h-6 bg-destructive/10 text-destructive rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold">
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-secondary text-secondary-foreground rounded-3xl p-8 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center">
                <Smartphone className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Solusi TAMBALIN</h3>
            </div>
            <ul className="space-y-4">
              {[
                'Pesan teknisi terdekat via aplikasi',
                'Harga transparan dengan estimasi waktu',
                'Layanan 24 jam untuk kebutuhan darurat',
                'Mitra terverifikasi & sistem rating',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-primary-foreground" size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            <strong className="text-foreground">TAMBALIN</strong> adalah aplikasi layanan tambal ban online berbasis on-demand yang menghubungkan pengendara motor dan mobil dengan teknisi tambal ban terdekat secara cepat dan aman. Dengan teknologi GPS dan sistem pemesanan digital, TAMBALIN membuat layanan tambal ban menjadi lebih cepat, transparan, dan terpercaya.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
