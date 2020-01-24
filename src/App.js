import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Table from './Table.js';
import WorkPage from './components/WorkPage.js';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      work : false
    }
    this.handleWork = this.handleWork.bind(this);
  
  }

  handleWork(){

    this.setState({

      work : true

    })
    console.log("The state has been set to true")

  }

  render(){
    return (
      <div className="App">
        <div className="App-header">
        {this.state.work? <WorkPage/> : <Table handleWork={this.handleWork.bind(this)}/>} 
      </div>
      </div>
    )
  }
}

export default App;
