import React from "react";
import "./VideoEmbed.scss";

function VideoEmbed(props) {
  return (
    <div className="VideoEmbed">
      <iframe
        className="VideoEmbed__frame"
        src={props.url}
        allowFullScreen={true}
        frameBorder={0}
        title="Video Embed"
      />
    </div>
  );
}

export default VideoEmbed;
