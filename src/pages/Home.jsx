import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ContactSection } from "../components/ContactSecion";
import { Footer } from "../components/Footer";
export const Home = () => {
  
  console.log("Home component rendered");

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle*/}
      
      <ThemeToggle />

      {/* BackGround Effects*/}
      <StarBackground />
      {/* Navbar */}
      <Navbar />
      {/* MainContent */}
      <main>
        <HeroSection />
        <AboutSection/>
        <SkillsSection />
        <ContactSection />
        <Footer />
      </main>
      {/* Footer */}
  </div>
  );
}