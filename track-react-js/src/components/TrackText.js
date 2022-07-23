const TrackText = (props) => {

  const trackTextStyle = {
    fontFamily: "revert-layer",
    fontSize: "2.8vw",
  }

  return (
    <div style={trackTextStyle}>{props.text}</div>
  );
}

export default TrackText;
