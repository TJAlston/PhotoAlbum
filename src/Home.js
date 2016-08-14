import React, { Component } from 'react'
import './App.css'

class Home extends Component {

  render () {
    //function was made to call on the bottom.
    // e=event
    // navigateTo = (e) => {
    //   e.preventDefault()
    //   this.props.navigate('page')
    // }
    return <div className= 'Home'>
    <header>
      <h1><u>Enchanting Hotels</u></h1>
      <h2><u>Photo Gallery</u></h2>
    </header>
      <div className='sidebar'>
      <div className='navigation'>
        <button className='button'>Hotel Accomadations</button>
        <button className='button'>Transportation</button>
        <button className='button'>Restaurant Selections</button>
        <button className='button'>Weddings</button>
        <button className='button'>Excursions</button>
        <button className='button'>Meeting Rooms</button>
      </div>

      <div className='albums'>

      <div className='hotel'>
      <img src='http://www.sydneyhotelsaccommodation.com/images/RydgesPerth-SpaSuite1.jpg' />
      Hotel Accomadations</div>

      <div className='weddings'>
      <img src='http://secondprintproductions.com/blog/wp-content/uploads/2011/03/chicago-blackstone-hotel-wedding-06.jpg' />
      Wedding Events</div>

      <div className='transportation'>
      <img src='http://www.cerkezkoybusinesshotel.com/en/uploads/gallery/RKotq/27032012-OfzlH.jpg' />
      Transportation</div>

      <div className='excursions'>
      <img src='https://www.carnival.com/~/media/Images/PreSales/Excursions/Ports_R-V/RTN/518061/Pictures/dolphin-swim-and-snorkel-mahogany-bay-isla-roatan-1.JPG' />
      Excursions</div>

      <div className='food'>
      <img src='http://www.hotel-r.net/im/hotel/de/food-hotel.jpg' />
      Restaurant Selections</div>

      <div className='meeting rooms'>
      <img src='https://www.omnihotels.com/-/media/images/hotels/daldtn/meetings/daldtn-omni-dallas-hotel-bishop-arts-boardroom.jpg?h=660&la=en&w=1170' />
      Meeting Rooms</div>
    </div>
  </div>
</div>
}
}
export default Home
