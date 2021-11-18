import React from 'react';
import {Footer, Blog, Possiblity, Features, WhatGPT3, Header} from './containers/index';
import {CTA, Brand, Navbar} from './Components/index';
import './App.css';
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possiblity/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
