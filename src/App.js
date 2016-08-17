import React, { Component } from 'react'
import Home from './Home'
import Gallery from './Gallery'

//think about code the way the page uploads.

class App extends Component {
  constructor () {
    super ()
    this.state = {
      //is the current screens object that is being defined.  Home screen view.
      currentScreen: 'home'
    }
  }

  navigateToPage = (screen, gallery, image) => {
    this.setState({
      currentScreen: screen,
      currentGallery: gallery
    })
  }

  render (){
    let screen

    //switch will let you switch between variable types.
    //when defining a variable put a space between the parenthesis when calling put it next to the word.
    switch(this.state.currentScreen) {
      case 'gallery':
        screen = <Gallery navigate={this.navigateToPage} index={this.state.currentGallery} />
        break
        //defaults back to the home page in case their is an error
      case 'home':
      default:
      // similar to else in an if statment
        screen = <Home navigate={this.navigateToPage} />
    }
    return <div className='App'>
      {/* screen is the alias of the home and page tags */}
      {screen}
    </div>
  }
}
export default App
