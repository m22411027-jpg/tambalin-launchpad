import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Phone, 
  MapPin, 
  DollarSign, 
  CreditCard, 
  Star, 
  History,
  Zap,
  Shield,
  Clock,
  Users,
  CheckCircle,
  Headphones
} from 'lucide-react';

const advantages = [
  { icon: Phone, title: 'On-Demand', desc: 'Bisa dipanggil kapan saja' },
  { icon: MapPin, title: 'GPS Real-time', desc: 'Teknisi datang ke lokasi' },
  { icon: DollarSign, title: 'Harga Transparan', desc: 'Estimasi harga & waktu jelas' },
  { icon: CreditCard, title: 'Pembayaran Digital', desc: 'Non-tunai, praktis & aman' },
  { icon: Shield, title: 'Mitra Terverifikasi', desc: 'Teknisi profesional terpercaya' },
  { icon: Zap, title: 'Cepat & Mudah', desc: 'Proses pemesanan instan' },
];

const features = [
  { icon: MapPin, title: 'Pencarian Teknisi', desc: 'Berbasis GPS terdekat' },
  { icon: Clock, title: 'Booking Otomatis', desc: 'Sistem reservasi cepat' },
  { icon: DollarSign, title: 'Estimasi Biaya', desc: 'Harga transparan sebelum order' },
  { icon: CreditCard, title: 'Pembayaran Digital', desc: 'E-wallet & transfer bank' },
  { icon: Star, title: 'Rating & Review', desc: 'Nilai kualitas layanan' },
  { icon: History, title: 'Riwayat Transaksi', desc: 'Lacak semua pesanan' },
];

const FeatureCard = ({ icon: Icon, title, desc, index }: { icon: any; title: string; desc: string; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 border border-border"
    >
      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
        <Icon className="text-primary" size={28} />
      </div>
      <h3 className="font-bold text-lg text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{desc}</p>
    </motion.div>
  );
};

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="keunggulan" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Keunggulan */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Keunggulan
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Kenapa Pilih <span className="text-primary">TAMBALIN</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Layanan tambal ban terbaik dengan fitur-fitur unggulan
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {advantages.map((item, index) => (
            <FeatureCard key={index} {...item} index={index} />
          ))}
        </div>

        {/* Fitur Utama */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Fitur Utama
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Fitur Lengkap untuk Kemudahan Anda
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <FeatureCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
