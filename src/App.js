import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Home from "./components/pages/Home";
import Post from "./components/pages/Post";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/:id" component={Post} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
