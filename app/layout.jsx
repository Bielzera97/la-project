import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import "./globals.css";


export const metadata = {
  title: "Landing Page Project"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Topbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
