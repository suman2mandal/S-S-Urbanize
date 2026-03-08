import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About Us | SS Urbanize",
  description:
    "Learn about SS Urbanize — modern essentials built for urban living.",
};

export default function AboutPage() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-semibold mb-8">
            About SS Urbanize
          </h1>

          <p className="text-neutral-600 mb-6">
            SS Urbanize was created with a simple goal —
            deliver smart, functional, and modern essentials
            designed for urban lifestyles.
          </p>

          <p className="text-neutral-600 mb-6">
            We focus on quality, minimal design, and practical
            usability. Every product is selected to improve
            everyday living without unnecessary complexity.
          </p>

          <p className="text-neutral-600">
            Our mission is to build a trusted Indian brand
            that combines affordability with reliability —
            and eventually expand into a full
            direct-to-consumer experience.
          </p>
        </div>
      </Container>
    </section>
  );
}