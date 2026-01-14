import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmad Rizki',
    role: 'Pengguna Motor, Mahasiswa',
    quote: 'Layanan ini sangat membantu saat ban bocor malam hari. Cepat dan jelas harganya.',
    rating: 5,
  },
  {
    name: 'Dewi Sartika',
    role: 'Pengguna Mobil',
    quote: 'Teknisinya responsif dan aplikasinya mudah digunakan. Sangat recommended!',
    rating: 5,
  },
  {
    name: 'Budi Santoso',
    role: 'Ojek Online',
    quote: 'Sering pakai TAMBALIN karena cepat dan harganya wajar. Teknisi juga ramah.',
    rating: 5,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Testimoni
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Apa Kata <span className="text-primary">Pengguna</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cerita mereka yang sudah merasakan kemudahan TAMBALIN
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card rounded-3xl p-8 shadow-card border border-border relative"
            >
              <div className="absolute -top-4 right-8">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Quote className="text-primary-foreground" size={20} />
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="text-primary fill-primary" size={20} />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">"{item.quote}"</p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-secondary-foreground font-bold text-lg">
                    {item.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{item.name}</h4>
                  <p className="text-muted-foreground text-sm">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
