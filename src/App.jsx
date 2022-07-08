import React, { Component } from 'react'
import Search from './Components/Search'
import List from './Components/List'
import './Components/List/index.css'

class App extends Component {

  state = {users:[]}

  saveUsers=(users)=>{
    this.setState({users})
  }

  render() {
    return (
      <div className="container">

            <Search saveUsers={this.saveUsers}/>
            <List users={this.state.users}/>
            
        </div>
    );
  }
}

export default App;