
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Home from './Pages/Home/Home/Home';
import LandingPage from './Pages/Login/LandingPage/LandingPage';
import Register from './Pages/Login/Register/Register';
import CreateProject from './Pages/Form/CreateProject/CreateProject';
import EditProject from './Pages/EditProject/EditProject/EditProject';
import ApproveProjects from './Pages/ApproveProject/ApproveProjects';
import ApproveProjectPage from './Pages/ApproveProject/ApproveProjectPage';
import Search from './Pages/Search/Search/Search';


function App() {
  return (
    <div className="App">
      <AuthProvider>

        <Router>
          <Switch>

            <Route path="/registration">
              <Register></Register>
            </Route>

            <Route path="/login">
              <LandingPage></LandingPage>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/createProject">
              <CreateProject></CreateProject>
            </Route>

            <Route path="/updateProject/:projectId">
              <EditProject></EditProject>
            </Route>

            <Route path="/approveProject">
              <ApproveProjectPage></ApproveProjectPage>
            </Route>
            <Route path="/search">
              <Search></Search>
            </Route>

            <Route path="/">
              <LandingPage></LandingPage>
            </Route>

          

          </Switch>
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
