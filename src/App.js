import React, { Component } from 'react'
import Navbar from './compoments/Navbar'
import Users from './compoments/Users'
import axios from 'axios';


export class App extends Component {




  render() {
    return (
      <>
        <Navbar />
        <div className='container'>
          <Users />
        </div>
      </>
    )
  }
}

export default App