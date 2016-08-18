import React, { Component } from 'react'

class Picture extends Component {
  navigateTo = (e) => {
    e.preventDefault()
    this.props.navigate('page')
  }

  goBack = () => {
    this.props.navigate('Page')
  }
  // What if you had a state, that held which image was zoomed.
  // if it was set, you would render just that large image,
  // or if it was null, you could render a list of thumbnails,
  // when you click on one it would set the state for that zoomed image
  render (){
    //function was made to call on the bottom.
    // e=event
    return <div className='Page'>
      <h1 onClick={this.goBack}>{this.gallery.name}</h1>
      <p>{this.gallery.description}</p>
      <img src={this.gallery.url} alt={event.photos}/>

      {/* instead render an array of <Picture> for this.galleries.photos */}
      {/* <Picture navigate={this.navigateToHome} /> */}
    </div>
  }
}

export default Picture
