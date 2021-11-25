import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Home from './Pages/Home';
import FirebaseMongodbProvider from './Context/FirebaseMongodbProvider';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Tours from './Pages/Tours';
import TourDetails from './Pages/TourDetails';
import PrivateRoute from './components/Private/PrivateRoute';
import AddATour from './Pages/AddATour';
import MyOrders from './Pages/MyOrders';
import ManageAllOrders from './Pages/ManageAllOrders';
import About from './Pages/About';
function App() {
  return (
    <div>
      <FirebaseMongodbProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}>
              
            </Route>

            <Route path="/tour"  element={<Tours />}>
              
            </Route>

            <Route path="/add_a_tour" element={<AddATour />}>
            </Route>

            <Route path="/my_orders" element={<MyOrders />}>
            </Route>

            <Route path="/manage_all_orders" element={<ManageAllOrders />}>
            </Route>


            <Route path="/tour_details/:id" element={<PrivateRoute> <TourDetails /> </PrivateRoute>}>
            </Route>

            <Route path="/login" element={<Login />}>
            </Route>

            <Route path="/signup" element={<Signup />}>
            </Route>

            <Route path="/about" element={<About />}>
            </Route>

            <Route path="*" element={<NotFound />}>
            </Route>

          </Routes>
          <Footer />
        </Router>
      </FirebaseMongodbProvider>
    </div>
  );
}

export default App;