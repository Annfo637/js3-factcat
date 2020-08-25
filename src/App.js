import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import StartPage from "./pages/StartPage";
import FactListPage from "./pages/FactListPage";
import { Route, Switch } from "react-router-dom";
import LayoutSimple from "./components/LayoutSimple";
import FactDetailPage from "./pages/FactDetailPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          path="/fact/:id"
          render={(props) => {
            return (
              <LayoutSimple>
                <FactDetailPage {...props} />
              </LayoutSimple>
            );
          }}
        ></Route>
        <Route path="/fact-list">
          <LayoutSimple>
            <FactListPage />
          </LayoutSimple>
        </Route>
        <Route path="/">
          <LayoutSimple>
            <StartPage />
          </LayoutSimple>
        </Route>
      </Switch>
    </div>
  );
}
export default App;
