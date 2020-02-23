import React, { useEffect } from "react";
import VideoList from "./VideoList";
import { FetchVideo } from "../Action";
import { connect } from "react-redux";
import styles from "./video.module.css";

const Video = props => {
  console.log("render");
  useEffect(() => {
    props.FetchVideo();
  }, []);

  return (
    <div>
      <h1 className={styles.header}>
        Soccer Video Highlights (Premier League,La Liga & Serie-A)
      </h1>
      {props.video.map(item => (
        <VideoList key={item.date} video={item} />
      ))}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    video: state.video,
  };
};
export default connect(mapStateToProps, { FetchVideo })(Video);
