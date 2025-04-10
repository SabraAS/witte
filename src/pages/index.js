import Head from "next/head";
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import ActivityAreas from '../components/activityAreas';
import Clients from '../components/clients';
import Services from '../components/services';
import Team from '../components/team';
import Contact from '../components/contact';
import Footer from '../components/footer';
import { useState, useEffect } from 'react';
import { Sora, DM_Sans } from "next/font/google";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});


export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia("(max-width: 1280px)");
    const onChange = () => setIsMobile(!!mql.matches);

    if (mql.addEventListener) {
      mql.addEventListener("change", onChange);
    } else {
      mql.addListener(onChange);
    }
    setIsMobile(mql.matches);

    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener("change", onChange);
      } else {
        mql.removeListener(onChange);
      }
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/logo.svg" />
        <title>witte</title>
      </Head>
      <div className={`${sora.variable} ${dmSans.variable} font-sans`}>
        <Navbar isMobile={isMobile} />
        <main>
          <Hero />
          <ActivityAreas />
          <Clients />
          <Services isMobile={isMobile} />
          <Team isMobile={isMobile} />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};