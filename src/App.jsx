import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Home from "./pages/Home"
import Hotel from "./components/Hotel"


function App() {
  return <div> 
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<Hotel/>}/>
     </Routes>
     </Router>

  </div>;

}

export default App;
