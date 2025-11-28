'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating coffee recipe suggestions based on user preferences.
 *
 * It exports:
 * - `getCoffeeRecipeSuggestion` - An async function that takes user preferences and returns a coffee recipe suggestion.
 * - `CoffeeRecipeSuggestionInput` - The input type for the `getCoffeeRecipeSuggestion` function.
 * - `CoffeeRecipeSuggestionOutput` - The output type for the `getCoffeeRecipeSuggestion` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CoffeeRecipeSuggestionInputSchema = z.object({
  flavorProfile: z
    .string()
    .describe(
      'The desired flavor profile of the coffee, e.g., sweet, bold, nutty, fruity.'
    ),
  dietaryRestrictions: z
    .string()
    .describe(
      'Any dietary restrictions, e.g., vegan, dairy-free, sugar-free.'
    ),
  additionalPreferences: z
    .string()
    .optional()
    .describe(
      'Any additional preferences or ingredients to include, e.g., chocolate, cinnamon.'
    ),
});
export type CoffeeRecipeSuggestionInput = z.infer<typeof CoffeeRecipeSuggestionInputSchema>;

const CoffeeRecipeSuggestionOutputSchema = z.object({
  recipeName: z.string().describe('The name of the suggested coffee recipe.'),
  ingredients: z
    .string()
    .describe('A list of ingredients required for the recipe.'),
  instructions: z.string().describe('Step-by-step instructions for making the coffee recipe.'),
});
export type CoffeeRecipeSuggestionOutput = z.infer<typeof CoffeeRecipeSuggestionOutputSchema>;

export async function getCoffeeRecipeSuggestion(
  input: CoffeeRecipeSuggestionInput
): Promise<CoffeeRecipeSuggestionOutput> {
  return coffeeRecipeSuggestionFlow(input);
}

const coffeeRecipeSuggestionPrompt = ai.definePrompt({
  name: 'coffeeRecipeSuggestionPrompt',
  input: {schema: CoffeeRecipeSuggestionInputSchema},
  output: {schema: CoffeeRecipeSuggestionOutputSchema},
  prompt: `You are a world-class barista, skilled at creating delicious and innovative coffee recipes.

  Based on the user's preferences below, suggest a unique coffee recipe.

  Flavor Profile: {{{flavorProfile}}}
  Dietary Restrictions: {{{dietaryRestrictions}}}
  Additional Preferences: {{{additionalPreferences}}}

  Make sure the recipe aligns with the specified flavor profile and dietary restrictions.
  Provide a creative recipe name, a list of ingredients, and clear, step-by-step instructions.
  `,
});

const coffeeRecipeSuggestionFlow = ai.defineFlow(
  {
    name: 'coffeeRecipeSuggestionFlow',
    inputSchema: CoffeeRecipeSuggestionInputSchema,
    outputSchema: CoffeeRecipeSuggestionOutputSchema,
  },
  async input => {
    const {output} = await coffeeRecipeSuggestionPrompt(input);
    return output!;
  }
);
