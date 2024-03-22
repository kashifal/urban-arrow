import React from "react";

function InventoryIcon() {
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
          <use transform="scale(.01111)" xlinkHref="#image0_85_3442"></use>
        </pattern>
        <image
          id="image0_85_3442"
          width="90"
          height="90"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
  );
}

export default InventoryIcon;
