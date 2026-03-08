import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/data/products";

export default function Shop() {
  return (
    <section className="py-24">
      <Container>
        <h1 className="text-4xl font-semibold mb-12">
          All Products
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
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