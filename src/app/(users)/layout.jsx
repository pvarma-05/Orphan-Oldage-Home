import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
    return (
      <html lang="en" className="scrollbar-thin scrollbar-thumb-[#578E7E] scrollbar-track-current ">
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    );
  }
  