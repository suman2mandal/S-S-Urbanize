import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";
import Featured from "@/components/sections/Featured";
import Marketplace from "@/components/Marketplace";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/sections/Newsletter";


export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Featured />
      <Marketplace />
      <Testimonials />
      <Newsletter />
    </>
  );
}