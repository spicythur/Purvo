import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import StorySection from "./components/StorySection";
import ShowcaseSection from "./components/ShowcaseSection";

function App() {
  return (
    <div>
      <NavBar />

      {/* Wrapper tinggi 200vh buat scroll space */}
      <div className="relative" style={{ height: "200vh" }}>
        {/* Story: di belakang, sticky nempel */}
        <div className="sticky top-0 z-0 h-screen">
          <StorySection />
        </div>

        {/* Hero: di depan, nutupin story. Scroll → hero naik → story terungkap */}
        <div className="relative z-10" style={{ marginTop: "-100vh" }}>
          <HeroSection />
        </div>
      </div>

      <ShowcaseSection />
    </div>
  );
}

export default App;
