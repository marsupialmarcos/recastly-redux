import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var mapStateToProps = (state) => {
  return {
    currentVideo: state.video,
    videoList: state.videoList
  }
};

var mapDispatchToProps = (dispatch) => ({
  handleVideoChange: (video) => dispatch(changeVideo(video))
});

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

var VideoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList)


export default VideoListContainer;
