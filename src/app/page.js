import AboutUs from "@/Components/(WithNavFooter)/AboutUs/AboutUs";
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
        {/* <h1>Home</h1> */}
        {/* <Footer></Footer> */}
      </div>
    </main>
  );
}
