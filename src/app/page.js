import Image from "next/image";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Aboutus from "./components/Aboutus";
import ContactUs from "./components/ContactUs";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import ChooseUs from "./components/Choose";

export default function Home() {
  return (
    <div>
      <div className=" md:bg-hero bg-contain bg-center bg-no-repeat">
        <Nav />
        <Hero />
      </div>
      <Aboutus />
      <ChooseUs />
      <ContactUs />
      <Faq />
      <NewsLetter />
      <Footer />
    </div>
  );
}
