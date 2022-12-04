import React from 'react';

interface Props {
  text: string;
}
export const TrackText: React.FC<Props> = ({ text }) => {

  const trackTextStyle: React.CSSProperties = {
    fontFamily: "revert-layer",
    fontSize: "2.8vw",
  }

  return (
    <div style={trackTextStyle} id="track-text">{text}</div>
  );
}
