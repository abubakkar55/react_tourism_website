import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Home from './Pages/Home';
import FirebaseMongodbProvider from './Context/FirebaseMongodbProvider';
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

            </Route>

            <Route path="/destination">

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
