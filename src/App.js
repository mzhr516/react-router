import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Contact } from "./pages/contact/contact";
import { Profile } from "./components/Profile";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";
import { MyProfilr } from "./components/myProfile";
import { Login } from "./components/Login";
import { useState } from "react";
import { Protected } from "./components/Protected";

function App() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const login = () => {
    setIsLogin(true);
    navigate("/");
  };
  return (
    <div className="App">
      <NavigationBar isLogin={isLogin} />
      <Routes>
        <Route path="" element={<h1>home page</h1>} />
        <Route path="about" element={<h1>about us page</h1>} />
        <Route path="contact12" element={<Contact />} />

        <Route path="profile" element={<Protected isLogin={isLogin} Component={Profile}/>}>
          {/* <Route index element={<h1>my own profile</h1>} /> */}
          <Route path="my" element={<MyProfilr />}>
            <Route path="detail" element={<>detail profile page</>} />
            <Route path="shorter" element={<>shorter profile page</>} />
          </Route>

          <Route path="friend" element={<h1>friends profile</h1>} />
        </Route>
        <Route path="users" element={<Protected isLogin={isLogin} Component={Users} />} />
        <Route path="user/:userId" element={<UserDetails />} />

        <Route path="*" element={<h1>page not found</h1>} />
        <Route path="login" element={<Login login={login} />} />
      </Routes>
    </div>
  );
}

export default App;
