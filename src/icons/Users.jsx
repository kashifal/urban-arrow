import React from "react";

function UsersIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
    >
      <circle cx="15" cy="11.25" r="5" fill="#979797"></circle>
      <circle cx="21.25" cy="11.25" r="3.75" fill="#979797"></circle>
      <circle cx="8.75" cy="11.25" r="3.75" fill="#979797"></circle>
      <path
        fill="#979797"
        fillRule="evenodd"
        d="M21.96 22.5h3.185c.592 0 1.046-.509.915-1.086-.405-1.79-1.595-5.164-4.81-5.164-1.108 0-1.975.4-2.652.999 1.884 1.223 2.859 3.364 3.363 5.251zM11.402 17.249a3.888 3.888 0 00-2.652-.999c-3.215 0-4.405 3.375-4.81 5.164-.13.577.323 1.086.915 1.086h3.184c.504-1.887 1.479-4.028 3.363-5.251z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#979797"
        d="M15 17.5c4.823 0 5.924 4.466 6.176 6.506.067.548-.374.994-.926.994H9.75c-.552 0-.993-.446-.926-.994.252-2.04 1.353-6.506 6.176-6.506z"
      ></path>
    </svg>
  );
}

export default UsersIcon;
