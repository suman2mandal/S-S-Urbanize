export default function WhyChoose() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-semibold mb-12">
          Why Choose SS Urbanize?
        </h3>

        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="font-medium mb-2">Premium Quality</h4>
            <p className="text-neutral-600 text-sm">
              Carefully selected materials built for durability and performance.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-2">Modern Design</h4>
            <p className="text-neutral-600 text-sm">
              Minimal aesthetics tailored for urban lifestyles.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-2">Reliable Support</h4>
            <p className="text-neutral-600 text-sm">
              Customer-first approach with responsive assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}