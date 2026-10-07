import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Mi Ecommerce",
  description: "Tienda online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh", margin: 0 }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}