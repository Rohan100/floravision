import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrendyPlant from "./components/TrendyPlant";
import TopSelling from "./components/TopSelling/TopSelling";
import CustomerReview from "./components/reviews/CustomerReview";
import Best from "./components/Best";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <div className='absolute top-0 left-0 w-full md:aspect-4/5 aspect-2/3 -z-10'>
        <Image unoptimized src={'/bg.jpg'} width={100} height={300} alt='large plant image' className="w-full h-full" />
      </div>
      <Hero />
      <TrendyPlant />
      <TopSelling/>
      <CustomerReview/>
      <Best/>
      <Footer/>
    </div>
  );
}
