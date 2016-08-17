import React, { Component } from 'react'
import Picture from './Picture'
import data from './data.json'

class Gallery extends Component {

  // What if you had a state, that held which image was zoomed.
  // if it was set, you would render just that large image,
  // or if it was null, you could render a list of thumbnails,
  // when you click on one it would set the state for that zoomed image
  constructor (props) {
    super()
    this.gallery = data.galleries[props.index]
  }

  goHome = () => {
    this.props.navigate('home')
  }

  render () {
    return <div className= 'Page'>
      <h1 onClick={this.goHome}>{this.gallery.name}</h1>
      <p>{this.gallery.description}</p>
      <img src={this.gallery.imageUrl} />

      {/* instead render an array of <Picture> for this.galleries.photos */}
      {/* <Picture navigate={this.navigateToHome} /> */}
    </div>
   }
}

export default Gallery
