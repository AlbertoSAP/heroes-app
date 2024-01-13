import React from "react";
import recordNotFound from '../resource/no-record-found.png'
const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <img src={recordNotFound} alt="record-not-found" />
      </div>
    </div>
  );
};

export default NotFound;
