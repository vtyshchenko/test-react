import "./App.css";
import Articles from "./components/Articles";
import Comments from "./components/Comments";
import Footer from "./components/Footer";
import Header from "./components/Header.js";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Articles />
      <Comments />
      <Footer />
    </div>
  );
}

export default App;
