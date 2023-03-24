import Head from "next/head";
import Header from "../components/header";
import Services from "../components/services";
import Testimonials from "../components/testimonials";
import Gallery from "../components/gallery";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sunnyside</title>
        <meta name="description" content="Sunnyside Agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Header />
        <Services />
        <Testimonials />
        <Gallery />
        <Footer />
      </main>
    </>
  );
}
