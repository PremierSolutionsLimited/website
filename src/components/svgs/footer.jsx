import * as React from "react";

function SvgComponent(props) {
  return (
    <svg viewBox="0 0 1440 320" {...props}>
      <path
        fill="# #000000"
        d="M0 96h40c40 0 120 0 200 21.3 80 21.7 160 63.7 240 64 80-.3 160-42.3 240-53.3s160 11 240 32 160 43 240 21.3C1280 160 1360 96 1400 64l40-32v288H0z"
      />
    </svg>
  );
}

export default SvgComponent;
