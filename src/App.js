import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import About from './components/About/About';
function App() {
  return (
    <div>

      <FirebaseMongodbProvider>

        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/tour">
              <Tours />
            </Route>

            <Route path="/add_a_tour">
              <AddATour />
            </Route>

            <Route path="/my_orders">
              <MyOrders />
            </Route>

            <Route path="/manage_all_orders">
              <ManageAllOrders />
            </Route>


            <PrivateRoute path="/tour_details/:id">
              <TourDetails />
            </PrivateRoute>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/signup">
              <Signup />
            </Route>

            <Route path="/about">
              <About />
            </Route>



            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
          <Footer />
        </Router>

      </FirebaseMongodbProvider>

    </div>
  );
}

export default App;
