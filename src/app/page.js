import AboutUs from "@/Components/(WithNavFooter)/AboutUs/AboutUs";
import Faq from "@/Components/(WithNavFooter)/Faq/Faq";
import Features from "@/Components/(WithNavFooter)/Features/Features";
import Banner from "@/Components/(WithNavFooter)/HomeComponents/Banner/Banner";
import Footer from "@/Components/Shared/Footer/Footer";
import NavBar from "@/Components/Shared/Navbar/Navbar";

export default function Home() {
  return (
    <main>
      <div className="">
        <NavBar />
        <Banner></Banner>
        <AboutUs></AboutUs>
        <Features></Features>
        <Faq></Faq>
        {/* <Footer></Footer> */}
      </div>
    </main>
  );
}
