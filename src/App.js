import React, { PureComponent } from 'react';
import Header from './Header';
import ScoreResults from './ScoreResults';
import filterScore from './filterScore';
import './App.css';

class App extends PureComponent {
	constructor(props) {
	super(props);
	this.state = {
      scoreData: filterScore(),
    };
	}
	
  render() {
    return (
      <div>
        <Header/>
        <ScoreResults scoreData={this.state.scoreData}/>
      </div>
    );
  }
}

export default App;
