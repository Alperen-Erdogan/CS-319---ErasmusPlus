import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo2 from './items/bilkent-logo.png'
import MyProfile from './MyProfile';
import Documents from './Documents'
import SchoolsAndCourses from './SchoolsAndCourses';
import CoordinatorList from './CoordinatorList';
import  Archive from './Archive';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MyProfilePage from './pages/MyProfilePage';
import ArchivePage from './pages/ArchivePage';
import CoordinatorListPage from './pages/CoordinatorListPage';
import ApplicationsPage from './pages/ApplicationsPage';
import DocumentsPage from './pages/DocumentsPage';
import SchoolPage from './pages/SchoolPage';
import NewApplicationPage from './pages/NewApplicationPage';
import TestPage from './pages/TestPage';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import TestTable from './TestTable';

function App() {
  const pageTitle = "My Profile";
  if ((localStorage.getItem("authenticated")) === "false") {

     return (
      <Router>
      <Switch>
        <Route exact path ="/" component={Login}/>
        <Route exact path ="/Register" component={Register}/>
        <Redirect replace to="/" />
      </Switch>
    </Router>
     
     )
    }
  return (
    <>
    {
    <Router>
      <Switch>
        <Route exact path ="/" component={Login}/>
        <Route exact path ="/Dashboard" component={Dashboard}/>
        <Route exact path ="/TestTable" component={TestTable}/>
        <Route exact path ="/Register" component={Register}/>
        <Route exact path ="/MyProfilePage" component = {MyProfilePage} />
        <Route exact path="/ArchivePage" component={ArchivePage} />
        <Route exact path="/ApplicationsPage" component={ApplicationsPage} />
        <Route exact path="/DocumentsPage" component={DocumentsPage} />
        <Route exact path="/SchoolPage" component={SchoolPage} />
        <Route exact path="/CoordinatorListPage" component={CoordinatorListPage} />
        <Route exact path="/NewApplicationPage" component={NewApplicationPage} />
        <Route exact path="/TestPage" component={TestPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
    }
    </>
    
  );
}

export default App;
