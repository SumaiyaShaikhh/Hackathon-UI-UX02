import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <html lang="en">
      <body>
        <Navbar/>     
        <HeroSection/>
        <Footer/>
      </body>
    </html>    
  );
}

