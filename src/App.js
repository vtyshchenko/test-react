import "./App.css";
import Articles from "./components/Articles/Articles.js";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import Navbar from "./components/Navbar/Navbar.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
