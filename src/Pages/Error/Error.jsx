// import React from "react";

// images
import error from "/error.jpg";

const Error = () => {
  return (
    <div className="my-5">
      <div className="customContainer">
        <picture className="error">
          <img src={error} className="" alt="404 - Page Not Found" />
        </picture>
      </div>
    </div>
  );
};

export default Error;
