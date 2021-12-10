
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import LandingPage from './Pages/Login/LandingPage/LandingPage';
import Register from './Pages/Login/Register/Register';


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
