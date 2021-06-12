import * as React from "react";

function SvgComponent(props) {
  return (
    <svg viewBox="0 0 1440 320" {...props}>
      <path
        fill="#f3f4f5"
        d="M0 128l34.3 10.7C68.6 149 137 171 206 170.7c68.3.3 137-21.7 205-21.4 69-.3 138 21.7 206 16 68.7-5.3 137-37.3 206-58.6 68.4-21.7 137-31.7 206-16 68.1 16.3 137 58.3 205 69.3 68.9 11 137-11 172-21.3l34-10.7v192H0z"
      />
    </svg>
  );
}

export default SvgComponent;
