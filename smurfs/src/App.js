import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Smurfs from './components/Smurfs';
import SmurfForm from './components/SmurfForm';
import { connect } from 'react-redux';

 class App extends Component {
  // styles
  container = {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }

  nav = {
    display: 'flex',
    margin: '10px 0'
  }

  render() { console.log(this.props)
    return (
      <Router>
        <div style = { this.container }>
          <div style = { this.nav }>
            <Link to="/smurfs">Smurfs</Link>
            &nbsp;|&nbsp;
            <Link to="/smurf-form">Add Smurf</Link>
          </div>
          <Route path="/smurfs"  exact component = { Smurfs } />
          <Route path="/smurf-form" exact render = { props => (
            <SmurfForm 
              {...props}
              smurf = {{
                name: '',
                age: '',
                height: ''
              }}
              update = { false }
            />
          )} />
          <Route path="/smurfs/:id" exact render = { props =>
            <SmurfForm
              { ...props }
              smurf = { this.props.mewSmurf }
              update
            />
          } />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  newSmurf: state.newSmurf
})

export default connect(mapStateToProps)(App)