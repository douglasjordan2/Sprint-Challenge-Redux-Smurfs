import axios from 'axios';

export const GET_SMURFS_START = 'GET_SMURFS_START';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const GET_SMURFS_FAILED = 'GET_SMURFS_FAILED';

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS_START })
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res.data)
      dispatch({
        type: GET_SMURFS_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: GET_SMURFS_FAILED,
        payload: err
      })
    })
}

export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILED = 'ADD_SMURF_FAILED';

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF_START })
  axios
    .post(`http://localhost:3333/smurfs`, smurf)
    .then(res => {
      console.log(res.data)
      dispatch({
        type: ADD_SMURF_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: ADD_SMURF_FAILED,
        payload: err
      })
    })
}

export const NEW_SMURF = 'NEW_SMURF';

export const newSmurf = smurf => dispatch => {
  dispatch({
    type: NEW_SMURF,
    payload: smurf
  })
}

export const UPDATE_SMURF_START = 'UPDATE_SMURF_START';
export const UPDATE_SMURF_SUCCESS = 'UPDATE_SMURF_SUCCESS';
export const UPDATE_SMURF_FAILED = 'UPDATE_SMURF_FAILED';

export const updateSmurf = smurf => dispatch => {
  console.log(smurf)
  dispatch({ type: UPDATE_SMURF_START })
  axios
    .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(res => {
      console.log(res.data)
      dispatch({
        type: UPDATE_SMURF_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: UPDATE_SMURF_FAILED,
        payload: err
      })
    })
}

export const DELETE_SMURF_START = 'DELETE_SMURF_START';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_FAILED = 'DELETE_SMURF_FAILED';

export const deleteSmurf = smurf => dispatch => {
  console.log(smurf)
  dispatch({ type: UPDATE_SMURF_START })
  axios
    .delete(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(res => {
      console.log(res.data)
      dispatch({
        type: UPDATE_SMURF_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: UPDATE_SMURF_FAILED,
        payload: err
      })
    })
}