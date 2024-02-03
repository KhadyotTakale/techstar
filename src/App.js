
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header.jsx';
import Home from './Components/Home.jsx';
import "./Style/App.scss";
import "./Style/header.scss";
import "./Style/home.scss";


function App() {
  return (

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>

  );
}

export default App;
