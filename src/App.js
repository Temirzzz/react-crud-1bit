import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import Feedback from './components/Feedback/Feedback';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Main} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Admin" component={Admin} />
        <Route exact path="/Feedback" component={Feedback} />
      </BrowserRouter>
    )
  }
}

export default App;
