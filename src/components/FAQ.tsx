import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqData = [
  {
    question: 'Bagaimana cara memesan layanan TAMBALIN?',
    answer: 'Cukup hubungi kami via WhatsApp, kirimkan lokasi Anda, dan teknisi terdekat akan segera menuju lokasi Anda. Anda juga akan mendapat estimasi waktu dan biaya sebelum teknisi berangkat.',
  },
  {
    question: 'Berapa lama waktu tunggu teknisi datang?',
    answer: 'Rata-rata waktu tunggu adalah 15-30 menit tergantung lokasi dan ketersediaan teknisi. Kami selalu berusaha memberikan layanan secepat mungkin.',
  },
  {
    question: 'Metode pembayaran apa saja yang tersedia?',
    answer: 'Kami menerima pembayaran tunai, transfer bank, dan e-wallet seperti GoPay, OVO, DANA, dan ShopeePay untuk kemudahan transaksi Anda.',
  },
  {
    question: 'Apakah layanan tersedia 24 jam?',
    answer: 'Ya! TAMBALIN menyediakan layanan 24 jam untuk kebutuhan darurat. Kami memahami ban bocor bisa terjadi kapan saja.',
  },
  {
    question: 'Apakah ada garansi untuk tambalan?',
    answer: 'Tentu! Setiap tambalan yang kami kerjakan memiliki garansi. Jika ada masalah dengan hasil tambalan, hubungi kami untuk perbaikan ulang gratis.',
  },
  {
    question: 'Area mana saja yang dijangkau TAMBALIN?',
    answer: 'Saat ini kami melayani area Bandar Lampung dan sekitarnya. Kami terus memperluas jangkauan layanan ke kota-kota lain.',
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-20 md:py-28 bg-muted" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Pertanyaan <span className="text-primary">Umum</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan yang sering diajukan
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
