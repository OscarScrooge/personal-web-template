import './App.css';
import Nav from "./components/Nav";
import {BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
import ContainerAbout from "./containers/ContainerAbout";
import ContainerResume from "./containers/ContainerResume";
import ContainerProyects from "./containers/ContainerProjects";

function App() {
  return (
      <Router>
            <div className="App">
                <Nav/>
                <Switch>
                    <Route path="/proyects">
                        <ContainerProyects/>
                    </Route>
                    <Route path="/resume">
                        <ContainerResume/>
                    </Route>
                    <Route path="/about">
                        <ContainerAbout/>
                    </Route>
                    <Route path="/">
                         <Redirect to="/about"/>
                    </Route>
                </Switch>
            </div>
      </Router>
  );
}

export default App;
