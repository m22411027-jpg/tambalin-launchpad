import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Bike, Car, Check } from 'lucide-react';

const pricingData = [
  {
    icon: Bike,
    title: 'Tambal Ban Motor',
    price: 'Rp 40.000',
    desc: 'Layanan cepat untuk motor',
    features: [
      'Teknisi datang ke lokasi',
      'Peralatan lengkap',
      'Garansi hasil tambalan',
      'Estimasi waktu 15-30 menit',
    ],
    popular: false,
  },
  {
    icon: Car,
    title: 'Tambal Ban Mobil',
    price: 'Rp 60.000',
    desc: 'Layanan profesional untuk mobil',
    features: [
      'Teknisi berpengalaman',
      'Peralatan standar bengkel',
      'Garansi hasil tambalan',
      'Estimasi waktu 30-45 menit',
    ],
    popular: true,
  },
];

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="layanan" className="py-20 md:py-28 bg-muted" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Harga Layanan
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Harga <span className="text-primary">Transparan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Harga dapat menyesuaikan jarak dan kondisi ban
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative bg-card rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all ${
                item.popular ? 'border-2 border-primary ring-4 ring-primary/10' : 'border border-border'
              }`}
            >
              {item.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Populer
                  </span>
                </div>
              )}

              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                  item.popular ? 'bg-primary' : 'bg-secondary'
                }`}>
                  <item.icon className={item.popular ? 'text-primary-foreground' : 'text-secondary-foreground'} size={32} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-extrabold text-foreground">{item.price}</span>
                <span className="text-muted-foreground ml-2">mulai dari</span>
              </div>

              <ul className="space-y-3 mb-8">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-foreground">
                    <Check className="text-primary flex-shrink-0" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/62812321745637"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-4 rounded-full font-semibold transition-all hover:scale-105 ${
                  item.popular
                    ? 'bg-primary text-primary-foreground hover:shadow-primary'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                }`}
              >
                Pesan Sekarang
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
