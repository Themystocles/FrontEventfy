import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/Routes/AppRoutes";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import './index.css'



function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
      <Footer />
    </Router>






  );
}

export default App;
