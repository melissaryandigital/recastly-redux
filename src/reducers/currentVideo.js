import Redux from 'redux';
import exampleVideoData from '../data/exampleVideoData.js';

var currentVideoReducer = (state=null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.


  switch (action.type) {
    case 'CHANGE_VIDEO':
      return action.video;

    default:
      return state;
  }
};

export default currentVideoReducer;



// I'm guessing we would use spread operator to create a copy and overwrite values of state