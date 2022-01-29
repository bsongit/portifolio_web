import './assets/styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ProviderToken from './components/ProviderToken';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (  
    <BrowserRouter>
      <ProviderToken>
        <Routes>
          <Route exact path="/sign-in" element={<SignIn />} />
          <Route exact path="/sign-up" element={<SignUp />} />
          <PrivateRoute exact path="/sign-up" element={<Home></Home>} ></PrivateRoute>
        </Routes>
      </ProviderToken>
  </BrowserRouter>
  );
}

export default App;
