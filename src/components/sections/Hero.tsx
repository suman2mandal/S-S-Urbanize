export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center">
      
      <div>
        <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
          Modern Essentials for <span className="text-neutral-500">Urban Living</span>
        </h1>

        <p className="mt-6 text-neutral-600 max-w-lg">
          S&S Urbanize delivers functional, high-quality products designed
          to elevate your everyday lifestyle.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-neutral-800 transition">
            Shop Collection
          </button>

          <button className="border border-neutral-300 px-8 py-3 rounded-md hover:bg-neutral-100 transition">
            View on Amazon
          </button>
        </div>
      </div>

      <div className="h-96 bg-neutral-200 rounded-2xl" />
    </section>
  );
}