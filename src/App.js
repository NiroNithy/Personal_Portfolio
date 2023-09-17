import Navbar from "./Component/Navbar";
import Content from "./Component/Content";
import Skill from "./Component/Skill";
import Work from "./Component/Work";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Content/>
        <Skill/>
        <Work/>
        <Contact/>
        <Footer/>
    </div>
  
  );
}

export default App;
