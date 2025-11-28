"use client";

import { useState } from "react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Wand2, Loader2, UtensilsCrossed } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getPlaceholderImage } from "@/lib/placeholder-images";

const recipeSchema = z.object({
  taste: z.string().min(1, "Profil rasa harus dipilih."),
  method: z.string().min(1, "Metode seduh harus dipilih."),
});

type RecipeFormValues = z.infer<typeof recipeSchema>;

const mockRecipe = {
  title: "V60 Gayo Floral",
  description: "Resep seduh V60 untuk mengeluarkan nuansa bunga dan buah dari Kopi Arabika Gayo.",
  steps: [
    "Siapkan 15g Kopi Arabika Gayo giling medium.",
    "Panaskan 250ml air hingga suhu 92°C.",
    "Lakukan 'blooming' dengan 30ml air selama 30 detik.",
    "Tuang sisa air secara perlahan dengan gerakan melingkar.",
    "Total waktu seduh sekitar 2-3 menit. Nikmati selagi hangat!"
  ]
};

export default function Recipes() {
  const [generatedRecipe, setGeneratedRecipe] = useState<typeof mockRecipe | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const recipeImage = getPlaceholderImage("recipe-image");

  const form = useForm<RecipeFormValues>({
    resolver: zodResolver(recipeSchema),
    defaultValues: {
      taste: "",
      method: "",
    },
  });

  function onSubmit(values: RecipeFormValues) {
    setIsLoading(true);
    setGeneratedRecipe(null);
    console.log("Generating recipe for:", values);
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedRecipe(mockRecipe);
      setIsLoading(false);
    }, 1500);
  }

  return (
    <section id="recipes" className="bg-background">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">AI Coffee Recipe Generator</h2>
          <p className="mt-2 text-muted-foreground">
            Bingung mau seduh kopi apa hari ini? Biarkan AI kami membantu Anda.
          </p>
        </div>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                <Wand2 className="h-6 w-6 text-primary" />
                Ciptakan Resep Anda
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="taste"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Profil Rasa yang Diinginkan</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih profil rasa" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="fruity">Fruity & Floral</SelectItem>
                            <SelectItem value="chocolatey">Chocolatey & Nutty</SelectItem>
                            <SelectItem value="bold">Bold & Strong</SelectItem>
                            <SelectItem value="balanced">Balanced</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="method"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Metode Seduh</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih metode seduh" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="v60">V60</SelectItem>
                            <SelectItem value="french-press">French Press</SelectItem>
                            <SelectItem value="aeropress">AeroPress</SelectItem>
                            <SelectItem value="kopi-tubruk">Kopi Tubruk</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Menciptakan...
                      </>
                    ) : (
                      <>
                        <Wand2 className="mr-2 h-4 w-4" />
                        Buatkan Resep
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed bg-card p-8 text-center">
            {isLoading && (
              <div className="animate-pulse">
                <UtensilsCrossed className="mx-auto h-12 w-12 text-muted-foreground" />
                <p className="mt-4 text-muted-foreground">AI sedang meracik resep spesial untuk Anda...</p>
              </div>
            )}
            {!isLoading && generatedRecipe && (
              <div className="w-full">
                <h3 className="font-headline text-2xl font-bold">{generatedRecipe.title}</h3>
                <p className="mt-2 text-muted-foreground">{generatedRecipe.description}</p>
                <ul className="mt-6 space-y-3 text-left">
                  {generatedRecipe.steps.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                        {index + 1}
                      </div>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {!isLoading && !generatedRecipe && (
              <div>
                {recipeImage && (
                  <Image
                    src={recipeImage.imageUrl}
                    width={200}
                    height={133}
                    alt={recipeImage.description}
                    className="mx-auto rounded-lg"
                    data-ai-hint={recipeImage.imageHint}
                  />
                )}
                <p className="mt-4 text-muted-foreground">Hasil resep Anda akan muncul di sini.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
