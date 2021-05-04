import React, { lazy, Suspense } from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Spinner from "./components/common/spinner/Spiner";

const Home = lazy(() => import("./components/pages/Home"));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
