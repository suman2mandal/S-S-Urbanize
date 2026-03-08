export default function Categories() {
  const categories = [
    { name: "Home Essentials" },
    { name: "Daily Utility" },
    { name: "Lifestyle Products" },
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-14">
          Shop by Category
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="h-64 bg-white border border-neutral-200 rounded-xl flex items-end p-6 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-medium">{cat.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}