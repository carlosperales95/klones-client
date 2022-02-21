import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import flv from 'flv.js';
import './stream.css';
import userPic from "../user_pic.jpg";


class StreamShow extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchStream(id);
    // this.buildPlayer();
  }

  componentDidUpdate() {
    // this.buildPlayer();
  }

  componentWillUnmount() {
    // this.player.destroy();
  }

  buildPlayer() {
    if (this.player || !this.props.stream)
      return;

    const id = this.props.match.params.id;

    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();

  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <div className="videoContainer">
        {/*<video ref={this.videoRef} style={{ width: '100%' }} controls={true} />*/}
          <div className="streamVideo"></div>
        </div>
        <div className="streamInfoArea">
          <div className="infoStreamer">
            <img className="userLogo infoElement" src={userPic}/>
            <div className="streamerStatus">
              <div className="statusHeader">
                <h5 className="infoElement">Streamer</h5>
                <div className="isLive infoElement"></div>
              </div>
              <div className="statusBottom">
                <p>Last active Now</p>
              </div>
            </div>
            <div className="liveStats">
              <div className="topStats">
                <div className="liveViewers">
                  <p>Live Viewers: </p>
                  <p>890</p>
                </div>
                <div className="totalViews">
                  <p>Total Views: </p>
                  <p>890</p>
                </div>
              </div>
              <div className="bottomStats">
                <div className="followers">
                  <p>Followers: </p>
                  <p>890</p>
                </div>
                <div className="subscribers">
                  <p>Subs: </p>
                  <p>890</p>
                </div>
              </div>

            </div>
          </div>
          <div className="infoHeader">
            <h1 className="streamTitle">{this.props.stream.title}</h1>
          </div>
          <div className="infoBody">
            <h5 className="streamDescription">{this.props.stream.description}</h5>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow);

