import React from "react";
import "./Loader.css";

export default () => (
    <div className="loader-wrap">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
);
