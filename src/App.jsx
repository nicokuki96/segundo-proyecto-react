import React from 'react'
import './App.scss';
import Topbar from './components/Topbar'
import Header from './components/Header'
import Menu from './components/Menu'
import Carousel from './components/Carousel'
import Info from './components/Info'
import Maps from './components/Maps'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/">
              <Topbar/>
              <Header/>
              <Menu/>
              <Carousel/>
              <Info/>
            </Route>
            <Route path="/contacto">
              <Topbar/>
              <Header/>
              <Menu/>
              <Maps/>
            </Route>
          </Switch>
        </Router>
    </div>
    
  );
}

export default App;
