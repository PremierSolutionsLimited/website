import * as React from "react";

function SvgComponent(props) {
  return (
    <svg viewBox="0 0 1440 320" {...props}>
      <path
        fill="#f3f4f5"
        d="M0 128l48 16c48 16 144 48 240 37.3C384 171 480 117 576 112s192 37 288 42.7c96 5.3 192-26.7 288-16 96 10.3 192 64.3 240 90.6l48 26.7V0H0z"
      />
    </svg>
  );
}

export default SvgComponent;
