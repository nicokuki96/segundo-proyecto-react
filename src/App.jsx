import React from 'react'
import './App.scss';
import Topbar from './components/Topbar'
import Header from './components/Header'
import Menu from './components/Menu'
import Carousel from './components/Carousel'
import Info from './components/Info'


function App() {
  return (
    <div className="App">
      <Topbar/>
      <Header/>
      <Menu/>
      <Carousel/>
      <Info/>
    </div>
  );
}

export default App;
