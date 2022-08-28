import './App.css';
import React from 'react';
import Exchange from './components/ExchangeLoad';


class App extends React.Component {
  constructor () {
    super()
    this.state = {
      exchangeRate: [],
    }
  }
  render(){
    return (
      <div className='App'>
        <header className="App-header">
          <Exchange />
        </header>
      </div>
    );
  }

}

export default App;