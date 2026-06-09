import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import StorySection from "./components/StorySection";
import ShowcaseSection from "./components/ShowcaseSection";
import QuoteSection from "./components/QuoteSection";
import USPSection from "./components/USPSection";
import ClosingSection from "./components/ClosingSection";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <NavBar />

      <main>
        {/* Overlapping: Story di belakang, Hero di depan */}
        <div className="relative" style={{ height: "200vh" }}>
          <div className="sticky top-0 z-0 h-screen">
            <StorySection />
          </div>
          <div className="relative z-10" style={{ marginTop: "-100vh" }}>
            <HeroSection />
          </div>
        </div>

        <ShowcaseSection />
        <QuoteSection />
        <USPSection />
        <ClosingSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
