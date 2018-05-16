import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {addRecipe,removeFromCalender} from '../actions';


class App extends Component {

  render() {
    return (
      <div className="App">
        Hello World
      </div>
    );
  }
}
function mapsStateToProps({calander,food}) {
  const dayOrder = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
  // Review later
  return {
    calander: dayOrder.map((day) => ({
      day,
      meals: Object.keys(calander[day]).reduce((meals,meal)=>{
        meals[meal] = calander[day][meal] ? food[calander[day][meal]] : null
      },{})
  }))
}
}

function mapDispatchToProps(dispatch){
  return {
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => dispatch(removeFromCalender(data))
  }
}

export default connect(mapsStateToProps, mapDispatchToProps)(App);
