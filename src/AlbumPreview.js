import React, { Component } from 'react'

class AlbumPreview extends Component {

  render () {
    return <div className='album'>
      <img src={this.props.imageUrl} onClick={this.props.navigate} />
      {this.props.name}
    </div>
  }
}

export default AlbumPreview
