import { cn } from '@/lib/utils';

interface ProductPriceProps {
  value: number;
  className?: string;
}

export default function ProductPrice({ value, className }: ProductPriceProps) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);

  return (
    <span className={cn('font-semibold', className)}>
      {formattedPrice}
    </span>
  );
}

