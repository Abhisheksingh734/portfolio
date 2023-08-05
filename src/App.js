// import logo from './logo.svg';
// import './App.css';
import ContactSocials from "./components/ContactSocials";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App flex flex-col md:items-center bg-zinc-50">
      <div className="viewport md:w-6/12 mt-5">
        <Header />
      </div>
      <div className="md:w-6/12 bg-zinc-50 mt-8">
        <HeroSection />
      </div>
      <div className="md:w-6/12 bg-zinc-50 p-2 mt-8">
        <Projects />
      </div>
      <div className="md:w-6/12 bg-zinc-50 ml-5 mt-8">
        <ContactSocials />
      </div>
    </div>
  );
}

export default App;
