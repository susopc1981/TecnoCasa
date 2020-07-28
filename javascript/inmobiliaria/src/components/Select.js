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
    <div className="row border-botom mb-2">
      <div className="col-6">
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
        <label className="mr-3 ml-1">Todas</label>
      </div>
      {props.options.map((value) => {
        let checked = false;
        if (data.data === value) checked = true;
        return (
          <div className="col-6">
            <input
              type="radio"
              name={props.name}
              value={value}
              checked={checked}
              onClick={(event) => data.fn(event, props.name)}
            />
            <label className="mr-3 ml-1">{value}</label>
          </div>
        );
      })}
    </div>
  );
}

export default Select;
