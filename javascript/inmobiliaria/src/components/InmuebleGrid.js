import React, { useContext } from "react";
import { DataContext } from "../datacontext/DataContext";
import Inmueble from "./Inmueble";

function InmuebleGrid() {
  const { data } = useContext(DataContext);
  console.log(data);
  return (
    <>
      <p>Hay un total de {data.length} inmuebles</p>
      {data.map((value) => {
        return <Inmueble data={value} />;
      })}
    </>
  );
}

export default InmuebleGrid;
