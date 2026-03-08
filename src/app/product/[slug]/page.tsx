import Container from "@/components/ui/Container";
import AddToCartButton from "@/components/cart/AddToCartButton";
import { products } from "@/data/products";
import { Product } from "@/types/products";
import Image from "next/image";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find(
    (p) => p.slug === slug
  ) as Product | undefined;

  if (!product) {
    return (
      <Container>
        <div className="py-24">Product not found</div>
      </Container>
    );
  }

  return (
    <section className="py-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-16">
          <div className="relative h-96 rounded-xl overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div>
            <h1 className="text-4xl font-semibold">
              {product.name}
            </h1>

            <p className="text-2xl mt-4">
              ₹{product.price}
            </p>

            <p className="mt-6 text-neutral-600">
              {product.description}
            </p>

            <div className="mt-8 flex gap-4">
              <AddToCartButton product={product} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}