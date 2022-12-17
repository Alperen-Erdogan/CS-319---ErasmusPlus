import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo2 from './items/bilkent-logo.png'
import Login from './Login'
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

function App() {
  const pageTitle = "My Profile";
  return (
    <>
    <Router>
      <Switch>
        <Route exact path ="/" component = {MyProfilePage} />
        <Route exact path="/ArchivePage" component={ArchivePage} />
        <Route exact path="/ApplicationsPage" component={ApplicationsPage} />
        <Route exact path="/DocumentsPage" component={DocumentsPage} />
        <Route exact path="/SchoolPage" component={SchoolPage} />
        <Route exact path="/CoordinatorListPage" component={CoordinatorListPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
    </>
  );
}

export default App;
