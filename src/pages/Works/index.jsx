import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Exercices from "./Exercices"
import CaseStudy from "./CaseStudy"
import ConcreteCase from "./ConcreteCase"

const Works = () => (
  <>
    <h1>Works</h1>
    <p>Welcome on the works page. Please, select a category</p>
    <Router>
      <nav>
        <Link to="/works/exercices">Exercices</Link>
        <Link to="/works/case-study">Case study</Link>
        <Link to="/works/concrete-case">Concret case</Link>
      </nav>
      <Switch>
        <Route path="/works/exercices">
          <Exercices />
        </Route>
        <Route path="/works/case-study">
          <CaseStudy />
        </Route>
        <Route path="/works/concrete-case">
          <ConcreteCase />
        </Route>
      </Switch>
    </Router>
  </>)
export default Works;