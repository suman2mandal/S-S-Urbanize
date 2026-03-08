import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg transition cursor-pointer">
        
        <div className="relative h-60">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-6">
          <h3 className="font-medium text-lg">
            {product.name}
          </h3>

          <p className="mt-2 text-neutral-600">
            ₹{product.price}
          </p>
        </div>
      </div>
    </Link>
  );
}