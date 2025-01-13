import Announcement from "@/components/Announcement"
import About from "@/components/About"
import Footer from "@/components/Footer"
import TopContent from "@/components/TopContent"
import Navbar from "@/components/Navbar"
import Product from "@/components/Product"
import Service from "@/components/Service"
import Support from "@/components/Support"

const Home = () => {
  return (
    <main>
      <Navbar />
      <TopContent />
      <div className="bg-[#f5f5f5] pt-[10px]">
        <Service />
        <Product />
        <Announcement />
        <Support />
        <About />
        <Footer />
      </div>
    </main>
  )
}

export default Home