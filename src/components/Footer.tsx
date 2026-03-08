export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm">
        
        <div>
          <h4 className="font-semibold mb-4">S&S Urbanize</h4>
          <p className="text-neutral-500">
            Smart essentials for modern urban living.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-neutral-500">
            <li>About</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Shop</h4>
          <ul className="space-y-2 text-neutral-500">
            <li>All Products</li>
            <li>Categories</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-neutral-500">
            <li>Shipping</li>
            <li>Returns</li>
          </ul>
        </div>

      </div>

      <div className="text-center text-neutral-400 mt-12 text-xs">
        © {new Date().getFullYear()} S&S Urbanize. All rights reserved.
      </div>
    </footer>
  );
}