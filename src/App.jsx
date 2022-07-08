import React, { Component } from 'react'
import Search from './Components/Search'
import List from './Components/List'
import './Components/List/index.css'

class App extends Component {

  state = {
    users:[],
    isFirst:true,
    isLoading:false,
    Err:'',
  }

  updateState=(stateObj)=>{
    this.setState(stateObj)
  }

  render() {
    return (
      <div className="container">

            <Search updateState={this.updateState}/>
            <List {...this.state}/>
            
        </div>
    );
  }
}

export default App;