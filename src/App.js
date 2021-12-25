
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Home from './Pages/Home/Home/Home';
import LandingPage from './Pages/Login/LandingPage/LandingPage';
import Register from './Pages/Login/Register/Register';
import CreateProject from './Pages/Form/CreateProject/CreateProject';
import EditProject from './Pages/EditProject/EditProject/EditProject';
import Search from './Pages/Search/Search/Search';

import TeacherHome from './Pages/TeacherHome/TeacherHome';
import TeacherView from './Pages/TeacherView/TeacherView/TeacherView';
import ProfilewithNav from './Pages/Profile/ProfilewithNav';


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

            <Route path='/teacher/home'>
              <TeacherHome></TeacherHome>
            </Route>

            <Route path="/search">
              <Search></Search>
            </Route>

            <Route path="/profile">
              <ProfilewithNav></ProfilewithNav>
            </Route>

            <Route path="/teacher/viewProject/:projectId">
              <TeacherView></TeacherView>
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
