import React, { Component } from 'react'
import data from './data.json'
import AlbumPreview from './AlbumPreview'

class Home extends Component {

  //function was made to call on the bottom.
  // e=event
  navigateTo = (index) => {
    this.props.navigate('gallery', index)
  }

  render () {
    const buttons = data.galleries.map((gallery, index) => {
      return <button
        className='button' key={index}
        onClick={this.navigateTo.bind(this, index)}>
        {gallery.name}
      </button>
    })

    const albums = data.galleries.map((gallery, index) => {
      return <AlbumPreview
        key={index} name={gallery.name}
        navigate={this.navigateTo.bind(this, index)}
        imageUrl={gallery.imageUrl}
      />
    })

    return <div className= 'Home'>
      <header>
        <h1><u>Enchanting Hotels</u></h1>
        <h2><u>Photo Gallery</u></h2>
      </header>
      <div className='sidebar'>
        <div className='navigation'>
          {buttons}
        </div>

        <div className='albums'>
          {albums}
        </div>
      </div>
      <footer> ABOUT US   |   SHOP ENCHANTING   |   MEDIA ROOM   |   &copy;ENCHANTING HOTELS </footer>
    </div>
  }
}

export default Home
