import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Table from './Table.js';
import WorkPage from './components/WorkPage.js';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      backColor : "App"
    }
    this.handleWork = this.handleWork.bind(this);
    this.handleColor = this.handleColor.bind(this);
  
  }

  handleWork(){

    this.setState({

      work : true

    })
    console.log("The state has been set to true")

  }


  handleColor(e){
    this.setState((state, props) =>({
      backColor: e
    }));
  }

  render(){
    return (
      <div className={this.state.backColor}>
        <div className="App-header">
        {this.state.work? <WorkPage/> : <Table parentMethod={this.handleColor}/>} 
      </div>
      </div>
    )
  }
}

export default App;
