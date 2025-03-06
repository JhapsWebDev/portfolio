import { useEffect } from "react";
import Aos from "aos";
import About from "./sections/About";
// import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Landing from "./sections/Landing";
import Projects from "./sections/Projects";
// import Services from "./sections/Services";

import "aos/dist/aos.css";
import "remixicon/fonts/remixicon.css";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1600,
    });
  }, []);
  return (
    <>
      <Header />
      <main>
        <Landing />
        <About />
        <Projects />
       {/* <Services />
        <Contact /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
