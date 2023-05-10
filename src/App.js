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

function App() {
  return (
    <Router>
      <Navbaar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-publications" element={<AddPublication />} />
        <Route path="/delete-publications" element={<DeletePublication />} />
      </Routes>
    </Router>
  );
}

export default App;
