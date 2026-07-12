import { getProductBySlug } from '@/lib/actions/product.actions';
import { notFound } from 'next/navigation';
import ProductPrice from '@/components/shared/product/product.price';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { CalendlyWidget } from '@/components/portfolio/calendly-widget';

export default async function ProductDetailsPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  // Safety checks for data
  const productPrice = typeof product.price === 'string' ? parseFloat(product.price) : Number(product.price) || 0;
  const productImages = Array.isArray(product.images) && product.images.length > 0 ? product.images : ['/placeholder-image.png'];
  // const productStock = typeof product.stock === 'number' ? product.stock : 0;

  return (
    <section className="container mx-auto py-20 px-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Images Column */}
        <div className="col-span-2">
          <Image 
            src={productImages[0]} 
            alt={product.name || 'Product image'} 
            width={600}
            height={600}
            className="w-full rounded-2xl border shadow-xl object-cover"
          />
        </div>

        {/* Details Column */}
        <div className="col-span-2 flex flex-col gap-6">
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground">
              {product.brand || 'Brand'}
            </p>
            <h1 className="text-4xl font-bold">{product.name || 'Product Name'}</h1>
          </div>
          
          <div className="py-4 border-y">
            <ProductPrice value={productPrice} className="text-2xl font-semibold" />
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {product.description || 'No description available.'}
          </p>
        </div>

        {/* Booking Card (Sticky) */}
        <div className="col-span-1">
          <Card className="sticky top-24">
            <CardContent className="p-6 flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Duration</span>
                <Badge variant="secondary">
                  30 min
                </Badge>
              </div>

              {/* CALENDLY BOOKING WIDGET */}
              <div className="pt-4 border-t">
                <p className="text-sm font-medium mb-4">Schedule a call:</p>
                <CalendlyWidget url="https://calendly.com/shortcutofsuccess1/30min" />
              </div>

            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}