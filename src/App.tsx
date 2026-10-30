import { Footer, Navbar } from "./components/layout";
import { About, Contact, Experience, Hero, Projects } from "./sections";

export const App = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex flex-1 flex-col">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
