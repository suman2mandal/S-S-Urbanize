"use client";

import { useCart } from "@/context/CartContext";
import Button from "@/components/ui/Button";
import { Product } from "@/types/products";

export default function AddToCartButton({
  product,
}: {
  product: Product;
}) {
  const { addToCart } = useCart();

  return (
    <Button onClick={() => addToCart(product)}>
      Add to Cart
    </Button>
  );
}