import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import AlertState from "./context/alert/AlertState";
import PokemonState from "./context/pokemon/PokemonState";
import { GlobalReset } from "./helpers/GlobalReset.style";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <PokemonState>
      <AlertState>
        <GlobalReset />
        <Router>
          <Navigation />
          <div className="App">
              {/* SWITCH START */}
              <Switch>
                <Route 
                  exact 
                  path={["/", "/home"]}
                  component={Home}
                  />
                <Route 
                  exact 
                  path="/about"
                  component={About}
                  />
                <Route
                  component={NotFound}
                  />
              </Switch>
              {/* SWITCH END */}
          </div>
        </Router>
      </AlertState>
    </PokemonState>
  );
}

export default App;
