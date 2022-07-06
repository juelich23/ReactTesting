import logo from './logo.svg';
import Addition from './components/addition';
import Sum from './components/sum';
import Product from './components/product'
import States from './components/StateDemo';
import './App.css';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <img src={logo} className='App-logo' alt='logo'/>
        <States/>
      </div>
    );
  }
}

export default App;
