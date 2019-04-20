import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs, newSmurf } from '../actions';
import SmurfCard from './SmurfCard';

class Smurfs extends Component {
  // state
  state = {
    update: false
  }

  // CDM
  componentDidMount() {
    setTimeout(() => this.props.getSmurfs(), 500);
  }

  // styles
  error = { 
    textAlign: 'center', 
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }

  smurfList = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }

  // methods
  newSmurf = (event, smurf) => {
    event.preventDefault();
    this.props.newSmurf(smurf);
    this.props.history.push(`/smurfs/${smurf.id}`)
  }

  // render
  render() {
    if(this.props.fetchingSmurfs) {
      return <div>Getting Smurfs...</div>
    } else if(this.props.error) {
      return (
        <div style = { this.error }>
          { this.props.error } <br />
          <button onClick = { () => window.location.reload() }>Retry?</button>
        </div>
      )
    } else {
      return (
        <div style = { this.smurfList }>
          <ul>
            { this.props.smurfs.map(smurf => (
              <li onClick = { event => this.newSmurf(event, smurf) }>
                <SmurfCard
                  smurf = { smurf }
                  key = { smurf.name }
                  onClick = { () => this.props.newSmurf(smurf) }
                  update = { true }
                />
              </li>
            )) }
          </ul>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs
})

export default connect(mapStateToProps, { getSmurfs, newSmurf })(Smurfs);