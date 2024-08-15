import AboutUs from "@/Components/(WithNavFooter)/AboutUs/AboutUs";
import Contact from "@/Components/(WithNavFooter)/Contacts/Contact";
import Faq from "@/Components/(WithNavFooter)/Faq/Faq";
import Features from "@/Components/(WithNavFooter)/Features/Features";
import Banner from "@/Components/(WithNavFooter)/HomeComponents/Banner/Banner";
import HowItWorks from "@/Components/(WithNavFooter)/HowItWorks/HowItWorks";
import Pricing from "@/Components/(WithNavFooter)/Pricing/Pricing";
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
        <HowItWorks></HowItWorks>
        <Faq></Faq>
        <Pricing></Pricing>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </main>
  );
}
