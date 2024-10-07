// Landing page.
// Components.
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import MyPassions from "../components/MyPassions";
import MyProfile from "../components/MyProfile";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// Hook.
import ScrollToTop from "../utils/ScrollToTop";

function LandingPage() {
  return (
    <div>
      <header className="sticky top-0 z-30">
        <Navbar />
      </header>

      <main id="about">
        <Hero />
      </main>

      <section id="skills">
        <Skills />
      </section>

      <section id="passions">
        <MyPassions />
      </section>

      <section id="profile">
        <MyProfile />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <footer>
        <Footer />
      </footer>

      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  );
}

export default LandingPage;

