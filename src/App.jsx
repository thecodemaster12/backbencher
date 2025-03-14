import Blog from "./components/blog/Blog"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import PriceCardLight from "./components/my-ui/PriceCardLight"
import Navbar from "./components/navigation/Navbar"
import Price from "./components/price/Price"
import Test from "./components/Test"

function App() {

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <Hero />
      </div>
        <Price />
        <Blog />
        <Footer />


    </>
  )
}

export default App
