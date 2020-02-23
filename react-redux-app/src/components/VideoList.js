import React from "react";
import parse from "html-react-parser";
import { connect } from "react-redux";
import styles from "./video.module.css";

const VideoLiSt = props => {
  let date = props.video.date;
  date = new Date();
  const options = { year: "numeric", month: "long", day: "2-digit" };
  const _resultDate = new Intl.DateTimeFormat("en-GB", options).format(date);
  // console.log(_resultDate.replace(/ /g, "-"));

  // console.log("video List", props);
  return (
    <div className={styles.parent}>
      <h2>{props.error}</h2>
      {props.loading ? <h2>Video Loading Pls Wait....</h2> : ""}
      <h2 className={styles.title}>{props.video.title}</h2>
      <span className={styles.date}>{_resultDate.replace(/ /g, "-")}</span>

      <div className={styles.videoContainer}>{parse(props.video.embed)}</div>
      <h3 className={styles.League}>{props.video.competition.name}</h3>
    </div>
  );
};

export default connect(null)(VideoLiSt);
