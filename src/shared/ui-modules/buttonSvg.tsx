import { Fragment } from "react";

export default function ButtonSvg() {
  return (
    <Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 mt-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </Fragment>
  );
}
