import { db } from '@/lib/db';

/**
 * Fetches a product from the Neon database by its slug.
 * This is the core "Business" action for the store.
 */
export async function getProductBySlug(slug: string) {
  try {
    // We use findFirst instead of findUnique to be safer with the product_slug_idx
    const product = await (db as any).product.findFirst({
      where: { slug: slug },
    });
    
    return product;
  } catch (error) {
    console.error('CRITICAL: Error fetching product by slug:', error);
    return null;
  }
}