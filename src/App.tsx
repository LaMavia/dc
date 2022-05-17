import React from "react";
import { AppRoutes } from "./App.routes";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { initStore } from "./store/configStore";
import { Provider } from "react-redux";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <>
      <Provider store={initStore()}>
        <Router>
          <Navigation>
            <AppRoutes />
          </Navigation>
        </Router>
      </Provider>
    </>
  );
}

export default App;
