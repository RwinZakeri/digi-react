import React from "react";

function Check() {
  return (
    <div class="flex items-center py-3 border-t border-[#f0f0f1]">
      <div class="flex grow justify-start gap-x-2 items-center">
        <p class="font-bold text-[14px]  text-[#3f4064]">ارسال امروز</p>
        <svg
          xmlnsXxlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
        >
          <defs>
            <symbol
              id="deliveryToday"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M22 5h-2v2h2V5z"></path>
              <path
                fillRule="evenodd"
                d="M15 15h6v-2h-6a1 1 0 110-2h5V9h-6a1 1 0 110-2h4V5H7a7 7 0 000 14h11v-2h-3a1 1 0 110-2zm-3-3a5 5 0 10-10 0 5 5 0 0010 0z"
                clipRule="evenodd"
              ></path>
              <path d="M21.5 9H24v2h-2.5V9zM21.5 17H19v2h2.5v-2z"></path>
              <path
                fillRule="evenodd"
                d="M7 12V9.75H5.5v3c0 .414.336.75.75.75h3V12H7z"
                clipRule="evenodd"
              ></path>
            </symbol>
          </defs>
          <g fill="#1028FF">
            <path d="M22 5h-2v2h2V5z"></path>
            <path
              fillRule="evenodd"
              d="M15 15h6v-2h-6a1 1 0 110-2h5V9h-6a1 1 0 110-2h4V5H7a7 7 0 000 14h11v-2h-3a1 1 0 110-2zm-3-3a5 5 0 10-10 0 5 5 0 0010 0z"
              clipRule="evenodd"
            ></path>
            <path d="M21.5 9H24v2h-2.5V9zM21.5 17H19v2h2.5v-2z"></path>
            <path
              fillRule="evenodd"
              d="M7 12V9.75H5.5v3c0 .414.336.75.75.75h3V12H7z"
              clipRule="evenodd"
            ></path>
          </g>
        </svg>
      </div>
      <label class="inline-flex items-center cursor-pointer" dir="ltr">
        <input type="checkbox" value="" class="sr-only peer" />
        <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full  peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
    </div>
  );
}

export default Check;
