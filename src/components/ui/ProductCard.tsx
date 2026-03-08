// ProductCard component
import Link from "next/link";
import Button from "./Button";

export default function ProductCard({
  product,
}: {
  product: any;
}) {
  return (
    <div className="border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition">
      <div className="h-52 bg-neutral-200 rounded-md mb-4" />

      <h3 className="font-medium">{product.name}</h3>
      <p className="text-sm text-neutral-600 mt-2">
        ₹{product.price}
      </p>

      <Link href={`/product/${product.slug}`}>
        <Button className="mt-4 w-full">
          View Product
        </Button>
      </Link>
    </div>
  );
}