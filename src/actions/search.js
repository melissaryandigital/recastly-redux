import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {

  //TODO:  Write an asynchronous action to handle a video search!



  return (dispatch) => {


    var options = {
      key: YOUTUBE_API_KEY,
      query: q,
      max: 5
    }
    var done = (data) => {
      dispatch(changeVideoList(data));
      dispatch(changeVideo(data[0]));
    }

    searchYouTube(options, done)


  }
}






export default handleVideoSearch;


// var options = {
//   key: this.props.API_KEY,
//   query: query
// };

// Include the searchYouTube functionality - it's imported for us
// var searchYouTube = ({key, query, max = 5}, callback) => {
// takes in the api key, query and a callback function

// probably needs to include currentVideo