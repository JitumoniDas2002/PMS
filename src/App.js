import {
  BrowserRouter as Router,
  Routes,
  Route,
  
  
} from "react-router-dom";

import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Dashboard from "./pages/dashboard";
import Navbaar from "./components/Navbaar";
import AddPublication from "./pages/add_publications";
import DeletePublication from "./pages/delete_publications";
import ListPublication from "./pages/list_publications";
import Home from "./pages/home";
import Logout from "./pages/logout";
import AdminPage from "./pages/admin";
import AdminDashboard from "./pages/admin-dashboard";
import ListUsers from "./pages/list-publishers";
import AdminPublications from "./pages/list-users-publications";
import AdminSignIn from "./pages/admin-login";

function App() {
  return (
    <Router>
      <Navbaar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-publications" element={<AddPublication />} />
        <Route path="/list-publications" element={<ListPublication />} />
        <Route path="/delete-publications" element={<DeletePublication />} />
        {/* <Route path="/admin" element={<AdminPage />} /> */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/list-publishers" element={<ListUsers />} />
        <Route path="/admin/list-user-publications" element={<AdminPublications />} />
        <Route path="/admin/login" element={<AdminSignIn />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
