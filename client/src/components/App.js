import { Route, Switch } from "react-router-dom";

// Import components
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          "home"
        </Route>
        <Route exact path="/signup">
          "signup"
        </Route>
        <Route exact path="/new_appointment">
          "new appointment"
        </Route>
      </Switch>
    </div>
  );
}

export default App;
