import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/data/products";

export default function Featured() {
  const featured = products.filter((p) => p.featured);

  return (
    <section className="py-24 bg-neutral-50">
      <Container>
        <h2 className="text-3xl font-semibold text-center mb-14">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}