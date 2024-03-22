import React from "react";

function MainIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
    >
      <path fill="url(#pattern0)" d="M0 0H30V30H0z"></path>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.01111)" xlinkHref="#image0_85_3430"></use>
        </pattern>
        <image
          id="image0_85_3430"
          width="90"
          height="90"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
  );
}

export default MainIcon;
