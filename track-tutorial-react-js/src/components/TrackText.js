const TrackText = (props) => {

  const trackTextStyle = {
    fontFamily: "revert-layer",
    fontSize: "2.8vw",
  }

  return (
    <div style={trackTextStyle} id="track-text">{props.text}</div>
  );
}

export default TrackText;
