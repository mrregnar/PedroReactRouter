import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <>
      <Router>
        <div
          style={{
            width: 100 + "vm",
            height: 80,
            backgroundColor: "lightblue",
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/:id" exact component={Home} /> */}
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route path="*" exact component={PageNotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
