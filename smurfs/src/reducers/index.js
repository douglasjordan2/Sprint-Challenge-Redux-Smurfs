import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILED,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILED,
  NEW_SMURF,
  UPDATE_SMURF_START,
  UPDATE_SMURF_SUCCESS,
  UPDATE_SMURF_FAILED,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILED
} from '../actions';

const initialState = {
  smurfs: [],
  smurf: {},
  newSmurf: {},
  fetchingSmurfs: false,
  fetchingSmurf: false,
  error: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_SMURFS_START:
    console.log(action.payload)
      return {
        ...state,
        fetchingSmurfs: true
      }
    case GET_SMURFS_SUCCESS:
    console.log(action.payload)
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false
      }
    case GET_SMURFS_FAILED:
    console.log(action.payload)
      return {
        ...state,
        error: 'no smurfs found'
      }
    case ADD_SMURF_START:
    console.log(action.payload)
      return {
        ...state,
        fetchingSmurf: true
      }
    case ADD_SMURF_SUCCESS:
    console.log(action.payload)
      return {
        ...state,
        smurf: action.payload,
        fetchingSmurf: false
      }
    case ADD_SMURF_FAILED:
    console.log(action.payload)
      return {
        ...state,
        error: 'no smurf found'
      }
    case NEW_SMURF:
    console.log(action.payload)
      return {
        ...state,
        newSmurf: action.payload
      }
    case UPDATE_SMURF_START:
    console.log(action.payload)
      return {
        ...state,
        fetchingSmurf: true
      }
    case UPDATE_SMURF_SUCCESS:
    console.log(action.payload)
      return {
        ...state,
        smurf: action.payload,
        fetchingSmurf: false
      }
    case UPDATE_SMURF_FAILED:
    console.log(action.payload)
      return {
        ...state,
        error: 'no smurf found'
      }
    case DELETE_SMURF_START:
    console.log(action.payload)
      return {
        ...state,
        fetchingSmurf: true
      }
    case DELETE_SMURF_SUCCESS:
    console.log(action.payload)
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurf: false
      }
    case DELETE_SMURF_FAILED:
    console.log(action.payload)
      return {
        ...state,
        error: 'no smurf found'
      }
    default:
      return state;
  }
}