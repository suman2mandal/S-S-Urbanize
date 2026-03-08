import Image from "next/image";

export default function Categories() {
  const categories = [
    {
      name: "Home Essentials",
      image: "/images/categories/home.png",
    },
    {
      name: "Daily Utility",
      image: "/images/categories/daily.png",
    },
    {
      name: "Lifestyle Products",
      image: "/images/categories/lifestyle.png",
    },
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
              className="relative h-64 rounded-xl overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

              {/* Text */}
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-xl font-semibold">
                  {cat.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}