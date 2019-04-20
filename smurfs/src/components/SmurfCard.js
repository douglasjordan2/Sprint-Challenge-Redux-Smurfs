import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteSmurf } from '../actions'

class SmurfCard extends Component {
  // styles
  text = {
    margin: '10px'
  }

  smurfCard = {
    border: '2px solid black',
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    margin: '5px 0',
    cursor: 'pointer',
    position: 'relative'
  }

  close = {
    position: 'absolute',
    top: '5px',
    right: '5px',
    cursor: 'pointer',
    color: 'red'
  }

  // methods
  deleteSmurf = (event, smurf) => {
    event.preventDefault();
    event.stopPropagation();
    this.props.deleteSmurf(smurf)
    window.location.reload();
  }

  // render
  render() {
    const { name, age, height } = this.props.smurf
    return (
      <div style = { this.smurfCard }>
        <span style = { this.text }>Name: { name }</span>
        <span style = { this.text }>Age: { age }</span>
        <span style = { this.text }>Height: { height }</span>
        <span style = { this.close } onClick = { event => this.deleteSmurf(event, this.props.smurf) }>X</span>
      </div>
    )
  }
}

export default connect(null, { deleteSmurf })(SmurfCard)