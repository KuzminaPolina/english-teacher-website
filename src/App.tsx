import { Navbar, TeachingStyle, TrialSession, Reviews, Philosophy, Hero, Footer } from "./components";

function App() {
  return (
    <>
      <header className="w-[100%] h-fit overflow-hidden relative">
        <Navbar />
        <Hero />
      </header>
      <main>
        <TeachingStyle />
        <Reviews />
        <TrialSession />
        <Philosophy />
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
