
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage/LandingPage';
import Registration from './components/LandingPage/Registration/Registration';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/login">
              <LandingPage></LandingPage>
            </Route>
            <Route path="/registration">
              <Registration></Registration>
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
