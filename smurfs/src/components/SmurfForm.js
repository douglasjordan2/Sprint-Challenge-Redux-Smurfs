import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addSmurf, updateSmurf } from '../actions'

class SmurfForm extends Component {
  // state
  state = {
    smurf: {
      name: '',
      age: '',
      height: '',
      id: ''
    }
  }

  // styles
  form = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '200px'
  }

  componentDidMount() {
    console.log(this.props)
    const { name, age, height, id } = this.props.smurf
    this.setState({ smurf: {
      name: name,
      age: age,
      height: height,
      id: id
    } })
  }

  // methods
  addSmurf = event => {
    event.preventDefault();
    let smurfId = this.props.smurfs.length + 1
    this.props.addSmurf(this.state.smurf);
    this.setState({
      smurf: {
        name: '',
        age: '',
        height: '',
        id: smurfId
      }
    });
    this.props.history.push('/smurfs/')
  }

  updateSmurf = event => {
    event.preventDefault();
    let smurfId = this.props.smurfs.length + 1
    this.props.updateSmurf(this.state.smurf)
    this.props.history.push('/smurfs/')
  }

  handleChange = event => {
    event.persist();
    let value = event.target.value;
    this.setState(prevState => ({
      smurf: {...prevState.smurf, [event.target.name]: value}
    }))
  };

  // render
  render() { console.log(this.props)
    return (
      <form 
        onSubmit = { this.props.update ? event => this.updateSmurf(event) : event => this.addSmurf(event) }
        style = { this.form }
      >
        <input 
          type="text" 
          placeholder="Name"
          name="name"
          value = { this.state.smurf.name }
          onChange = { event => this.handleChange(event) }
        />
        <input 
          type="text"
          placeholder="Age"
          name="age"
          value = { this.state.smurf.age }
          onChange = { event => this.handleChange(event) }
        />
        <input 
          type="text"
          placeholder="Height"
          name="height"
          value = { this.state.smurf.height }
          onChange = { event => this.handleChange(event) }
        />
        <input 
          type="submit" 
          value="Submit"
        />
      </form>
    )
  }
}


const mapStateToProps = state => ({
  smurfs: state.smurfs,
  smurf: state.newSmurf
})

export default connect(mapStateToProps, { addSmurf, updateSmurf })(SmurfForm)