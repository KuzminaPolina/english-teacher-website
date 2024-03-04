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
      <header className="w-[100%] sm:h-[568px] md:h-[800px] xl:h-[1000px] overflow-hidden relative">
        <Navbar />
        <Hero />
        <div className="pink-gradient w-[100%] h-[200px] lg:h-[250px] absolute mb-0 mt-auto bottom-0 z-20"></div>
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
