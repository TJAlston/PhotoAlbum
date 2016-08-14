import React, { Component } from 'react'
import './App.css'


class Page extends Component {

  render (){
    navigateTo = (e) => {
      e.preventDefault()
      this.props.navigate('home')
    }
    return <div className= 'Page'>
     <h1>Enchanting Hotels</h1>
     <p> THIS IS WHERE YOUR HTML CAN GO</p>
     <img src="http://2.bp.blogspot.com/-pATX0YgNSFs/VP-82AQKcuI/AAAAAAAALSU/Vet9e7Qsjjw/s1600/Cat-hd-wallpapers.jpg" />
     <Picture navigate={this.navigateToHome} />CHANGE PAGE</div>
}
}

export default Page
