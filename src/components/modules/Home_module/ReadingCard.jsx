import React from "react";

function ReadingCard({ img, title }) {
  return (
    <div className="w-full lg:w-5/12 overflow-hidden object-cover rounded-lg border-2 my-4">
      <div className="w-full overflow-hidden object-cover">
        <img src={img} className="w-full h-5/12" alt="mobile" />
      </div>
      <div className="w-full px-2 py-4">
        <p className="text-sm">{title}</p>
      </div>
    </div>
  );
}

export default ReadingCard;
