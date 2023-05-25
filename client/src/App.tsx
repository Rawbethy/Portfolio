import React, {Component} from 'react';
import './App.css';

import Navbar from './components/navbar';
import Body from './components/body';
import Footer from './components/footer';

export default class App extends Component {

  render() {
    return (
      <div className="main" id='main'>
        <Navbar />
        <Body />
        <Footer />
      </div>
    )
  }
}

