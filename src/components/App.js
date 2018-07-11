import React from 'react';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import Nav from './Nav.js';
import changeVideo from '../actions/currentVideo.js';
import changeVideoList from '../actions/videoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import store from '../store/store.js';

export default class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   // this.state = {
  //   //   videos: [],
  //   //   currentVideo: null
  //   // };
  // }

  // componentDidMount() {

  //   this.props.getYouTubeVideos('react tutorials');

  // }

  // handleVideoListEntryTitleClick(video) {
  //   this.setState({currentVideo: video});
  // }

  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.

  //
  render() {
    return (
      <div>
        <Nav /> 
        <div className="row">
          <div className="col-md-7">
            <VideoPlayerContainer />
          </div>
          <div className="col-md-5">
            <VideoListContainer />
          </div>
        </div>
      </div>
    );
  }
}
