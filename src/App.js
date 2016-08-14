import React, { Component } from 'react'
import './App.css'
import Home from './Home'
import Page from './Page'

//think about code the way the page uploads.

class App extends Component {
  constructor () {
    super ()
    this.state = {
      //is the current screens object that is being defined.  Home screen view.
      currentScreen: 'home'
    }
  }
  navigateToPage = (src) => {
    this.setState({currentScreen:scr})
  }
  render (){
    let screen

    switch(this.state.currentScreen){
    //switch will let you switch between variable types.
    //when defining a variable put a space between the parenthesis when calling put it next to the word.
    case 'home': screen = <Home navigate={this.state.navigateToPage} />
    //  if its true break out and do something else
      break
    case 'page': screen = <Page navigate={this.state.navigateToPage} />
      break
    //defaults back to the home page in case their is an error
    default: screen = <Home />
    // similar to an if statment
  }
    return <div className='App'>
    {/* screen is the alias of the home and page tags */}
      {screen}
      </div>
  }
}
export default App
