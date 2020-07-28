import React, { useContext, useState } from "react";
import "./App.css";

import FilterZone from "./components/FilterZone";
import { DataContext } from "./datacontext/DataContext";
import InmuebleGrid from "./components/InmuebleGrid";
import { Col, Container, Row } from "reactstrap";

function App() {
  const [dataToShow, setDataToShow] = useState();

  function getRooms(States) {
    setDataToShow(States);
  }

  return (
    // <div className="App">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-center">
          <h1>TECNOCASA</h1>
          <h4>Tu web para encontrar casa</h4>
        </div>
      </div>
      <DataContext.Provider value={{ data: dataToShow, fn: getRooms }}>
        {/* <div className="container"> */}
        <div className="row">
          <div className="col-12 col-md-4">
            <FilterZone />
          </div>
          <div className="col-12 col-md-8">
            {dataToShow ? <InmuebleGrid /> : <></>}
          </div>
        </div>
        {/* </div> */}
      </DataContext.Provider>
    </div>
    // </div>
  );
}

export default App;
