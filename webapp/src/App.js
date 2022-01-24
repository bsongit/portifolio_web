import './assets/styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
