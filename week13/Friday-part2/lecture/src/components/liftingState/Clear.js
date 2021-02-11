import React from "react";

const Clear = (props) => {
  return <>
    <button className="btn btn-info" onClick={props.reset}>Clear</button>
  </>
};

export default Clear;
