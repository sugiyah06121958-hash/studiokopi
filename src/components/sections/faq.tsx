import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Apa bedanya kopi bubuk dan kopi sangrai (roasted beans)?",
    answer: "Kopi sangrai adalah biji kopi utuh yang telah dipanggang. Anda perlu menggilingnya sendiri sebelum diseduh. Kopi bubuk adalah kopi sangrai yang sudah digiling dan siap seduh. Menggiling sendiri memberikan kesegaran maksimal, sementara kopi bubuk menawarkan kepraktisan.",
  },
  {
    question: "Bagaimana cara terbaik menyimpan kopi?",
    answer: "Simpan kopi Anda di dalam wadah kedap udara, di tempat yang sejuk, kering, dan gelap. Hindari menyimpannya di kulkas atau freezer karena dapat menyerap kelembapan dan bau lain.",
  },
  {
    question: "Dari mana Kisting Coffeee mendapatkan biji kopinya?",
    answer: "Kami bekerja sama dengan petani kopi dari berbagai daerah unggulan di Indonesia, seperti Gayo, Toraja, Kintamani, dan banyak lagi. Kami berkomitmen pada praktik perdagangan yang adil dan berkelanjutan.",
  },
  {
    question: "Berapa lama waktu pengiriman pesanan saya?",
    answer: "Waktu pengiriman bervariasi tergantung lokasi Anda. Untuk wilayah Jabodetabek, biasanya memakan waktu 1-3 hari kerja. Untuk luar Jabodetabek, bisa memakan waktu 3-7 hari kerja.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-card">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mt-2 text-muted-foreground">
            Temukan jawaban untuk pertanyaan Anda di sini.
          </p>
        </div>
        <Accordion type="single" collapsible className="mx-auto w-full max-w-3xl">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
