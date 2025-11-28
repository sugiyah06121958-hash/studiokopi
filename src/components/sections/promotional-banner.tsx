import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { ArrowRight, Tag } from "lucide-react";

export default function PromotionalBanner() {
  const promoImage = getPlaceholderImage("promo-banner");

  return (
    <section id="promo" className="bg-background py-0 sm:py-0 lg:py-0">
      <div className="container px-0 sm:px-4">
        <div className="relative flex min-h-[300px] flex-col items-center justify-center overflow-hidden rounded-none bg-accent p-8 text-center text-accent-foreground sm:rounded-lg">
          {promoImage && (
            <Image
              src={promoImage.imageUrl}
              alt={promoImage.description}
              fill
              className="object-cover opacity-20"
              data-ai-hint={promoImage.imageHint}
            />
          )}
          <div className="relative z-10">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-sm font-medium">
              <Tag className="h-4 w-4" />
              Penawaran Terbatas
            </div>
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              Diskon 20% Untuk Pesanan Pertama!
            </h2>
            <p className="mt-2 max-w-xl mx-auto">
              Daftarkan diri Anda sekarang dan dapatkan diskon spesial untuk menikmati kopi terbaik dari kami.
            </p>
            <Button size="lg" variant="secondary" asChild className="mt-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link href="#contact">
                Klaim Sekarang <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
