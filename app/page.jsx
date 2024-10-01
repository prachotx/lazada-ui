import Footer_1 from "@/components/Footer-1";
import Footer_2 from "@/components/Footer-2";
import Footer_3 from "@/components/Footer-3";
import Footer_4 from "@/components/Footer-4";
import TopContent from "@/components/TopContent";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import Service from "@/components/Service";

export default function Home() {
  return (
    <main>
      <Navbar />
      <TopContent />
      <div className="bg-[#f5f5f5] pt-[10px]">
        <Service />
        <Product />
        <Footer_1 />
        <Footer_2 />
        <Footer_3 />
        <Footer_4 />
      </div>
    </main>
  );
}
