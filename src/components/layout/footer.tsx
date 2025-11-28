import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

import { BrandLogo } from "@/components/icons";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-card">
      <div className="container py-12">
        <div className="grid gap-12 md:grid-cols-3 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="#" className="mb-4 inline-block">
              <BrandLogo />
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              Menghadirkan cita rasa kopi terbaik dari seluruh nusantara, langsung ke cangkir Anda.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-headline text-lg font-semibold">Navigasi</h4>
            <ul className="space-y-2">
              <li><Link href="#products" className="text-sm text-muted-foreground hover:text-primary">Produk</Link></li>
              <li><Link href="#story" className="text-sm text-muted-foreground hover:text-primary">Cerita Kami</Link></li>
              <li><Link href="#recipes" className="text-sm text-muted-foreground hover:text-primary">Resep</Link></li>
              <li><Link href="#faq" className="text-sm text-muted-foreground hover:text-primary">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-headline text-lg font-semibold">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Syarat & Ketentuan</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Kebijakan Privasi</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-headline text-lg font-semibold">Ikuti Kami</h4>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Facebook"><Facebook className="h-5 w-5" /></Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Instagram"><Instagram className="h-5 w-5" /></Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Twitter"><Twitter className="h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} KopiLoka. Semua hak dilindungi undang-undang.</p>
        </div>
      </div>
    </footer>
  );
}
