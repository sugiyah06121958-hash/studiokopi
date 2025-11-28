import Image from "next/image";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { Leaf, Award, Heart } from "lucide-react";

export default function Story() {
  const storyImage = getPlaceholderImage("story-image");

  const values = [
    {
      icon: Leaf,
      title: "Dari Petani Lokal",
      description: "Kami bekerja sama langsung dengan petani kopi terbaik di Indonesia untuk memastikan kualitas dan kesejahteraan."
    },
    {
      icon: Award,
      title: "Kualitas Premium",
      description: "Setiap biji kopi disangrai dengan presisi untuk mengeluarkan potensi rasa yang maksimal."
    },
    {
      icon: Heart,
      title: "Dengan Penuh Cinta",
      description: "Proses dari hulu ke hilir kami lakukan dengan sepenuh hati untuk secangkir kopi yang sempurna."
    }
  ]

  return (
    <section id="story" className="bg-card">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              Perjalanan Biji Kopi Kami
            </h2>
            <p className="text-muted-foreground">
              Di KopiLoka, kami percaya bahwa secangkir kopi yang nikmat berawal dari biji kopi berkualitas dan proses yang teliti. Kami menjelajahi pelosok nusantara untuk menemukan biji kopi dengan karakter unik, membawanya ke ruang sangrai kami, dan mengubahnya menjadi mahakarya rasa yang siap Anda nikmati.
            </p>
            <div className="space-y-6 pt-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg lg:h-[450px]">
            {storyImage && (
              <Image
                src={storyImage.imageUrl}
                alt={storyImage.description}
                fill
                className="object-cover"
                data-ai-hint={storyImage.imageHint}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
