import Footer from "@/Components/Shared/Footer/Footer";
import NavBar from "@/Components/Shared/Navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    // Set container here to fixed width
    <div className="container mx-auto">
      <NavBar />
      <div className="mt-20">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
