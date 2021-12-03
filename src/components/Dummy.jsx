import { useRef } from "react";
export const Dummy = () => {
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  return (
    <div>
      <button onClick={executeScroll}>Click to scroll </button>
      <div style={{ height: "1800px", backgroundColor: "black" }}></div>
      <div id="target">target</div>
      <div ref={myRef}>I wanna be seen</div>
    </div>
  );
};
