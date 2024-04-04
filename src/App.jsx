import { BrowserRouter } from "react-router-dom";

import {
  About,
  Technologies,
  Projects,
  Contact,
  Navbar,
  StarsCanvas,
} from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern z-[-10] bg-cover bg-no-repeat bg-center">
          <Navbar />
          <About />
        </div>
        <Technologies />
        <Projects />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
