import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Usuarios from "./pages/usuarios";
import Articulos from "./pages/articulos";
import Tiendas from "./pages/tiendas";
// import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/usuarios" component={Usuarios} />
          <Route exact path="/articulos" component={Articulos} />
          <Route exact path="/tiendas" component={Tiendas} />
          {/* <Route component={PageNotFound} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
