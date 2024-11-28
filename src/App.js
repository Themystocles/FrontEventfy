import { BrowserRouter as Router } from "react-router-dom";
import Links from "./components/Routes/Links";
import AppRoutes from "./components/Routes/AppRoutes";


function App() {
  return (
    <Router>
      <Links />
      <AppRoutes />
    </Router>





  );
}

export default App;
