import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
import currentVideoReducer from '../reducers/currentVideo.js';



//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

var mapStateToProps = (state) => {
  return {
    currentVideo: currentVideo.state
  }
};


var VideoPlayerContainer = connect(
  mapStateToProps,
  null
)(VideoPlayer);

export default VideoPlayerContainer;
