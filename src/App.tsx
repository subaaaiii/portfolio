import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Approutes from "./routes";
import { useSEO } from "./seo";
import 'animate.css';

function App() {
  useSEO({});

  return (
    <div className="font-poppins bg-bg">
      <Navbar />
      <Approutes />
      <Footer />
    </div>
  );
}

export default App;
