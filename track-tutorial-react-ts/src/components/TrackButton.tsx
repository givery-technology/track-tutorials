import React from 'react';

interface Props {
  onClick: () => void;
}
export const TrackButton: React.FC<Props> = ({ onClick }) => {

  const trackButtonStyle: React.CSSProperties = {
    display: "inline-block",
    fontSize: "1.8vw",
    margin: "2em",
    padding: "8px 20px",
    lineHeight: 1.42857143,
    textAlign: "center",
    whiteSpace: "nowrap",
    cursor: "pointer",
    border: "1px solid transparent",
    borderRadius: "4px",
    color: "#fff",
    backgroundColor: "#337ab7",
    borderColor: "#2e6da4",
  }

  return (
    <button style={trackButtonStyle} id="track-button" onClick={onClick}>Click me!!</button>
  );
}
