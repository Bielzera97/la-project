import Benefits from "./components/Benefits";
import Cases from "./components/Cases";
import HeroSection from "./components/HeroSection";
import Depoiments from "./components/Depoiments";
import Faqs from "./components/Faqs";

export default function Home() {
  return (
   <main>
      <HeroSection/>
      <Benefits/>
      <Cases/>
      <Depoiments/>
      <Faqs/>
   </main>
  );
}
