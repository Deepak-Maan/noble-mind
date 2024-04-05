"use client";
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Aboutus from "./components/Aboutus";
import ContactUs from "./components/ContactUs";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import ChooseUs from "./components/Choose";
import BackTop from "./components/BackTop";
import Preloader from "./components/Preloader";

export default function Home() {
  const [data, setdata] = useState(true);
  useEffect(() => {
    setdata(true);
    setTimeout(() => {
      setdata(false);
    }, 3000);
  }, []);
  return (
    <>
      {data ? (
        <>
          <Preloader />
        </>
      ) : (
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
          <BackTop />
        </div>
      )}
    </>
  );
}
