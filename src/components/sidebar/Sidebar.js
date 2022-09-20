import React from "react";

const styels = {
  width: "100%",
  height: "100%",
  position: "fixed",
  padding: "1rem",
  left: "0",
  top: "0",
  backdropFilter: "blur(2px)",
  backgroundColor: "rgba(0, 0, 0, .8)",
  opacity: "1",
  zIndex: "2147483636",
};

const Sidebar = ({ open }) => {
  return (
    <main className="h-full w-full">
      <div style={styels} />
    </main>
  );
};

export default Sidebar;
