import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Mission } from "@/components/mission";
import { Features } from "@/components/features";
import { LogoSection } from "@/components/logo-section";
import { PreFooter } from "@/components/pre-footer";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Mission />
        <Features />
        <LogoSection />
      </main>
      <PreFooter />
      <Footer />
    </div>
  );
}
