export default function Navbar() {
  return (
    <nav className="w-full border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold tracking-wide">
          <a href="/" className="hover:text-neutral-600">S&S Urbanize</a>
        </h1>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="/" className="hover:text-neutral-600">Home</a>
          <a href="/shop" className="hover:text-neutral-600">Shop</a>
          <a href="/about" className="hover:text-neutral-600">About</a>
          <a href="/contact" className="hover:text-neutral-600">Contact</a>
        </div>

        <button className="bg-black text-white px-5 py-2 text-sm rounded-md hover:bg-neutral-800 transition">
          Shop Now
        </button>
      </div>
    </nav>
  );
}