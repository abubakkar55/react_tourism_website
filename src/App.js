import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <div>

      <Router>
        <Header />
        <Switch>
          <Route exact path="/">

          </Route>

          <Route  path="/tour">

          </Route>

          <Route  path="/destination">

          </Route>




          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
        <Footer />
      </Router>


    </div>
  );
}

export default App;
