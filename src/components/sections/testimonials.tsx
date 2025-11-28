import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    title: "Pecinta Kopi",
    quote: "Kopi Gayo dari KopiLoka benar-benar luar biasa. Rasanya otentik dan aromanya bikin nagih. Pengiriman juga cepat!",
    imageId: "testimonial-1",
  },
  {
    name: "Sarah Lee",
    title: "Barista Rumahan",
    quote: "Saya sudah mencoba banyak kopi, tapi House Blend dari KopiLoka punya tempat spesial. Sangat seimbang dan cocok untuk espresso.",
    imageId: "testimonial-2",
  },
  {
    name: "Budi Santoso",
    title: "Penikmat Senja",
    quote: "Robusta Temanggung-nya mantap! Pahitnya pas dan nendang. Sempurna untuk menemani sore hari. Recommended!",
    imageId: "testimonial-3",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-card">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Apa Kata Mereka?</h2>
          <p className="mt-2 text-muted-foreground">Cerita dari para pelanggan setia KopiLoka.</p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto w-full max-w-xs sm:max-w-xl lg:max-w-4xl"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const testimonialImage = getPlaceholderImage(testimonial.imageId);
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="flex h-full flex-col justify-between p-6">
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400"/>)}
                        </div>
                        <p className="flex-grow text-muted-foreground italic">"{testimonial.quote}"</p>
                        <div className="mt-6 flex items-center">
                          <Avatar>
                            {testimonialImage && <AvatarImage src={testimonialImage.imageUrl} alt={testimonial.name} data-ai-hint={testimonialImage.imageHint} />}
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="ml-4">
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
