import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { Bean, ShoppingCart } from "lucide-react";

const products = [
  {
    id: "arabika-gayo",
    name: "Arabika Gayo",
    origin: "Aceh Gayo, Sumatra",
    notes: "Bunga, buah, hasil akhir yang bersih",
    imageId: "product-arabika",
  },
  {
    id: "robusta-temanggung",
    name: "Robusta Temanggung",
    origin: "Temanggung, Jawa Tengah",
    notes: "Tebal, cokelat, keasaman rendah",
    imageId: "product-robusta",
  },
  {
    id: "house-blend-loka",
    name: "House Blend Loka",
    origin: "Campuran Arabika & Robusta",
    notes: "Seimbang, karamel, sedikit pedas",
    imageId: "product-house-blend",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-background">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Produk Unggulan Kami</h2>
          <p className="mt-2 text-muted-foreground">Pilih biji kopi favorit Anda, baik bubuk maupun sangrai.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const productImage = getPlaceholderImage(product.imageId);
            return (
              <Card key={product.id} className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader>
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    {productImage && (
                      <Image
                        src={productImage.imageUrl}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={productImage.imageHint}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    )}
                  </div>
                  <CardTitle className="pt-4 font-headline text-2xl">{product.name}</CardTitle>
                  <CardDescription>{product.origin}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-2">
                    <Bean className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <h4 className="font-semibold">Catatan Rasa:</h4>
                      <p className="text-sm text-muted-foreground">{product.notes}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-accent hover:bg-accent/90">
                    <Link href="https://wa.me/6281234567890?text=Saya%20tertarik%20dengan%20kopi%20'${product.name}'" target="_blank">
                      <ShoppingCart className="mr-2 h-4 w-4" /> Beli via WhatsApp
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
