import Home from "./pages/home/Home"
import TopBar from "./components/topbar/TopBar";
import Register from "./pages/register/Register"
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";

import {
  Route,
  Link,
  Routes,
  BrowserRouter
} from "react-router-dom";

function App() {
  const user = true;
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> :<Register />} />
        <Route path="/login" element={user ? <Home /> :<Login />} />
        <Route path="/write" element={user ? <Write /> :<Register />} />
        <Route path="/settings" element={user ? <Settings /> :<Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;