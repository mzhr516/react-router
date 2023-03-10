import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Contact } from "./pages/contact/contact";
import { Profile } from "./components/Profile";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="" element={<h1>home page</h1>} />
        <Route path="about" element={<h1>about us page</h1>} />
        <Route path="contact12" element={<Contact />} />
        
        <Route path="profile" element={<Profile />}>
          <Route index element={<h1>my own profile</h1>} />
          <Route path="my" element={<h1>my own profile</h1>} />
          <Route path="friend" element={<h1>friends profile</h1>} />
        </Route>
        <Route path="users" element={<Users/>} />
        <Route path="user/:userId" element={<UserDetails/>}/>
        
        
        <Route path="*" element={<h1>page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
