import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/**
 * Layout wrapper for all case study pages under /projects/*
 * Provides the shared Navbar and Footer.
 */
export default function ProjectLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

