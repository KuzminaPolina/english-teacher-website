import {
  Navbar,
  About,
  Contacts,
  Reviews,
  Teaching,
  Footer,
  Hero,
} from "./components";

function App() {
  return (
    <>
      <header className="w-[100%] h-fit overflow-hidden relative">
        <Navbar />
        <Hero />
      </header>
      <main>
        <About />
        <Reviews />
        <Contacts />
        <Teaching />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
