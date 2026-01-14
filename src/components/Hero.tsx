import { motion } from 'framer-motion';
import { MapPin, Clock, Shield } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Tambalin Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20 pb-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              🔧 Layanan Tambal Ban #1 di Indonesia
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Ban Bocor?
            <br />
            <span className="text-white/90">Panggil Teknisi ke Lokasimu!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/85 mb-8 max-w-xl"
          >
            TAMBALIN adalah aplikasi layanan tambal ban on-demand. Kapan saja, di mana saja — teknisi datang ke lokasi Anda dengan cepat dan aman.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href="https://wa.me/62812321745637"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:scale-105 transition-all animate-pulse-glow"
            >
              📱 Pesan via WhatsApp
            </a>
            <a
              href="#tentang"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Pelajari Lebih Lanjut
            </a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-6"
          >
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin className="text-white" size={20} />
              <span className="text-white text-sm font-medium">GPS Real-time</span>
            </div>
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full">
              <Clock className="text-white" size={20} />
              <span className="text-white text-sm font-medium">Respon &lt; 15 Menit</span>
            </div>
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full">
              <Shield className="text-white" size={20} />
              <span className="text-white text-sm font-medium">Mitra Terverifikasi</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
