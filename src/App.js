import React, { lazy, Suspense } from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Preloader from "./components/common/preloader/Preloader";

const Home = lazy(() => import("./components/pages/Home"));

function App() {
  return (
    <Suspense fallback={<Preloader />}>
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
