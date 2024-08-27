import Footer from "@/Components/Shared/Footer/Footer";
import NavBar from "@/Components/Shared/Navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="">
      <NavBar />
      <div className="mt-20">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
