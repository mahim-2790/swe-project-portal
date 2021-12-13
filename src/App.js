
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Home from './Pages/Home/Home/Home';
import LandingPage from './Pages/Login/LandingPage/LandingPage';
import Register from './Pages/Login/Register/Register';
import CreateProject from './Pages/Form/CreateProject/CreateProject';


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
          </Switch>
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
