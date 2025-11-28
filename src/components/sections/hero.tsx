import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const heroImage = getPlaceholderImage("hero-background");

  return (
    <section className="relative h-[80vh] min-h-[500px] w-full overflow-hidden text-primary-foreground">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <div className="container">
          <h1 className="font-headline text-4xl font-bold leading-tight drop-shadow-lg md:text-6xl lg:text-7xl">
            Cita Rasa Kopi Asli Indonesia
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl drop-shadow-md">
            Nikmati kekayaan aroma dan rasa dari biji kopi pilihan yang diproses dengan penuh cinta.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#products">
                Lihat Koleksi Kami <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
