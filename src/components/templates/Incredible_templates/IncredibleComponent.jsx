import React, { useEffect, useRef, useState } from "react";
import AllIncredibleCard from "../../modules/IncredibleOffers_modules/AllIncredibleBox";
import ProductBoxContainer from "../../modules/IncredibleOffers_modules/ProductBoxContainer";
function IncredibleComponent() {
  const parent = useRef();
  const [parentInfo, setParentInfo] = useState(null);
  const detect = () => {
    const target = parent.current;
    const info = target.getBoundingClientRect();
    setParentInfo(info);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      detect();
    });
  }, []);
  return (
    <div ref={parent} className="w-11/12 mx-auto h-[200vh] relative">
      <p className="text-lg p-2">همه شگفت‌انگیز‌ها</p>
      <div className="flex gap-2">
        <AllIncredibleCard position={parentInfo} />
        <ProductBoxContainer />
      </div>
    </div>
  );
}

export default IncredibleComponent;
