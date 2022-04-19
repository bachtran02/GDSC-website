import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/HomePage";
import MaterialMain from './pages/Materials';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <HomePage/>
    </div>
    </Router>
  );
 
}

export default App;
