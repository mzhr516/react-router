import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Contact } from "./pages/contact/contact";

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Routes>
        <Route path="" element={<h1>home page</h1>} />
        <Route path="about" element={<h1>about us page</h1>} />
        <Route path="contact12" element={<Contact/>} />
        <Route path="abc" element={<h1>abc page</h1>} />
      </Routes>
      
    </div>
  );
}

export default App;
