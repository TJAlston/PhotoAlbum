import React, { Component } from 'react'

class Picture extends Component {
  navigateTo = (e) => {
    e.preventDefault()
    this.props.navigate('page')
  }

  goBack = () => {
    this.props.navigate('Page')
  }

  render (){
    // return <h1>Home</h1>
    //function was made to call on the bottom.
    // e=event
    return <div className='Page'>
      <h1 onClick={this.goBack}>{this.gallery.name}</h1>
      <p>{this.gallery.description}</p>
      <img src={this.gallery.imageUrl} />

      {/* instead render an array of <Picture> for this.galleries.photos */}
      {/* <Picture navigate={this.navigateToHome} /> */}
    </div>
  }
}

export default Picture
