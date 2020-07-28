import React from "react";

function OptionSelect(props) {
  return <option value={props.value}>{props.name}</option>;
}

export default OptionSelect;
