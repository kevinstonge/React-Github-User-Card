import React from "react";
import "./Star.scss";
class Star extends React.Component {
  render() {
    const opacity = this.props.filled ? "1" : "0";
    return (
      <svg id="starSVG" version="1.0">
        <defs id="defs4" />
        <g label="Layer 1" groupmode="layer" id="layer1">
          <path
            style={{
              fillOpacity: opacity,
              stroke: "black",
              strokeWidth: 2,
              strokeOpacity: 1,
            }}
            id="path3651"
            d="M 46.296296,51.906272 L 31.916351,42.474649 L 17.502712,51.8547 L 22.029072,35.264028 L 8.654054,24.454438 L 25.831443,23.632463 L 31.978866,7.5717174 L 38.068716,23.65438 L 55.243051,24.537884 L 41.829396,35.299492 L 46.296296,51.906272 z "
          />
        </g>
      </svg>
    );
  }
}

export default Star;
