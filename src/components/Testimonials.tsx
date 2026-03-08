export default function Testimonials() {
  const reviews = [
    "Excellent quality and fast delivery.",
    "Very useful product. Worth the price.",
    "Clean design and premium feel.",
  ];

  return (
    <section className="bg-neutral-50 py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-14">
          What Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white p-8 border border-neutral-200 rounded-xl"
            >
              <p className="text-neutral-600 text-sm">{review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}