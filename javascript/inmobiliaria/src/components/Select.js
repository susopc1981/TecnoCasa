import React, { useContext } from "react";
import { FilterContext } from "../datacontext/DataContext";
// import OptionSelect from "./OptionSelect";
// import { SelectContext } from "../datacontext/DataContext";

function Select(props) {
  const data = useContext(FilterContext);
  let initialcheck = true;
  console.log(data.data);
  if (data.data === "") {
    initialcheck = false;
    console.log("fdadsfd");
  }
  return (
    <>
      {data.data === "" ? (
        <input
          type="radio"
          name={props.name}
          value="Todas"
          checked="true"
          onClick={(event) => data.fn(event, props.name)}
        />
      ) : (
        <input
          type="radio"
          name={props.name}
          value="Todas"
          onClick={(event) => data.fn(event, props.name)}
        />
      )}
      <label className="mr-2">Todas</label>
      {props.options.map((value) => {
        let checked = false;
        if (data.data === value) checked = true;
        return (
          <>
            <input
              type="radio"
              name={props.name}
              value={value}
              checked={checked}
              onClick={(event) => data.fn(event, props.name)}
            />
            <label className="mr-2">{value}</label>
          </>
        );
      })}
    </>
  );
}

export default Select;
