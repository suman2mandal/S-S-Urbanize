import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Contact Us | SS Urbanize",
  description:
    "Get in touch with SS Urbanize for product inquiries, support, or business collaborations.",
};

export default function ContactPage() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-semibold mb-8">
            Contact Us
          </h1>

          <p className="text-neutral-600 mb-10">
            Have questions about our products or need assistance?
            Reach out to us — we’re here to help.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full border border-neutral-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border border-neutral-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full border border-neutral-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Write your message..."
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white px-8 py-3 rounded-md hover:bg-neutral-800 transition"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 text-sm text-neutral-500">
            <p>Email: support@ssurbanize.in</p>
            <p>Business Hours: Mon – Sat, 10 AM – 6 PM</p>
          </div>
        </div>
      </Container>
    </section>
  );
}