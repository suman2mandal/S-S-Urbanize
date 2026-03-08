export default function Newsletter() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold">
          Join Our Community
        </h2>

        <p className="mt-4 text-neutral-600">
          Get product updates, offers and lifestyle tips.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-neutral-300 px-6 py-3 rounded-md w-full md:w-96"
          />
          <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-neutral-800 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}