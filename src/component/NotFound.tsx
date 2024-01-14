import React from "react";
import recordNotFound from "../resource/no-record-found.png";
import { useHeroe } from "../Hook/UseHeroe";

interface NotFoundprops {
  actionHandler: ()=> void
}

const NotFound:React.FC<NotFoundprops> = ({
  actionHandler
}) => {
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
        <div className="d-flex justify-content-center mt-5">
          <button 
          className="btn btn-warning"
          onClick={actionHandler}
          >Back view Heroe</button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
