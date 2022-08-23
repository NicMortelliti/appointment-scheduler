import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        "home"
      </Route>
      <Route exact path="/signup">
        "signup"
      </Route>
      <Route exact path="/new_appointment">
        "new appointment"
      </Route>
    </div>
  );
}

export default App;
