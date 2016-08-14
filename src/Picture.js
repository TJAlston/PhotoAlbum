import React, { Component } from 'react'
import './App.css'


class Home extends Component {
    navigateTo = (e) => {
      e.preventDefault()
      this.props.navigate('page')
    }

      render (){
        return 
        //function was made to call on the bottom.
        // e=event
