import Navbar from "./NavBar";
import Footer from "./Footer"
export const Layout = ({ children, footer = true, navbar = false }) => {
  return (
    <>
      {navbar && <Navbar />}
      {children}
      {footer && <Footer />}
    </>
  );
};

