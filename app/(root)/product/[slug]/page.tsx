import { getProductBySlug } from '@/lib/actions/product.actions';
import { notFound } from 'next/navigation';
import ProductPrice from '@/components/shared/product/product.price';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default async function ProductDetailsPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const product = await getProductBySlug(slug);

  // If the slug doesn't exist in the DB (Product table), trigger a 404
  if (!product) notFound();

  return (
    <section className="container mx-auto py-20 px-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Images Column */}
        <div className="col-span-2">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full rounded-2xl border shadow-xl"
          />
        </div>

        {/* Details Column */}
        <div className="col-span-2 flex flex-col gap-6">
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground">
              {product.brand}
            </p>
            <h1 className="text-4xl font-bold">{product.name}</h1>
          </div>
          
          <div className="py-4 border-y">
            <ProductPrice value={Number(product.price)} className="text-2xl font-semibold" />
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Purchase Card */}
        <div className="col-span-1">
          <Card>
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex justify-between">
                <span>Price</span>
                <ProductPrice value={Number(product.price)} />
              </div>
              <div className="flex justify-between">
                <span>Status</span>
                <Badge variant={product.stock > 0 ? 'default' : 'destructive'}>
                  {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                </Badge>
              </div>

              {/* NEXT STEP: This button will eventually link to the Cart or Checkout Action */}
              <button className="w-full bg-primary text-primary-foreground py-3 rounded-md hover:opacity-90">
                Proceed to Booking
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}