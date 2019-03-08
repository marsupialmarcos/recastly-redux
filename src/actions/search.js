import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import _ from "lodash";


// handleVideoSearch([search string 'q']);
// this is our event handler. this will eventually be invoked by a component
// when a browser event occurs

//... but it returns a function object?

var handleVideoSearch = (q) => {
  // TODO:  Write an asynchronous action to handle a video search!

  // searchYT({..options}, function(items) {})

  // items is what feed into dispatch > change videoList && changevideo

  // The callback for searchYT needs to execute on success.
  // Because we want control to not be dependent.
  // ~confusion~ map? dispatch actions to changeVideo && changeVideoList
  // what are inputs to changeVideo && changeVideoList

  // Return a function instead of an action object
  // return (dispatch) => {
  //   dispatch(changeVideo(videos[0]));
  //   dispatch(changeVideoList(videos));
  //   map these ^ && send out search YT with key
  // }
  // This inner function is able to dispatch other action creators

  var searchYouTubeDebounced = _.debounce(searchYouTube, 1000);

  return (dispatch) => {
    searchYouTubeDebounced({
      APIkey: YOUTUBE_API_KEY,
      q: q
    }, (videos) => {
      dispatch(changeVideo(videos[0]));
      dispatch(changeVideoList(videos));
    });
  };

}

// takes in a query = q, using API_KEY
// make a call to search youtube with q
// change videoList and changeVideo

// User writes query, passed into search YT
// Send a change passing in API key call
//   To change video
//   To video list

export default handleVideoSearch;
