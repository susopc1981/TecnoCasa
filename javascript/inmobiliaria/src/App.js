import React, { useContext, useState } from "react";
import "./App.css";

import FilterZone from "./components/FilterZone";
import { DataContext } from "./datacontext/DataContext";
import InmuebleGrid from "./components/InmuebleGrid";

function App() {
  const [dataToShow, setDataToShow] = useState();

  function getRooms(States) {
    setDataToShow(States);
  }

  return (
    <div className="App">
      <>
        <DataContext.Provider value={{ data: dataToShow, fn: getRooms }}>
          <FilterZone />
          {dataToShow ? <InmuebleGrid /> : <></>}
        </DataContext.Provider>
      </>
    </div>
  );
}

export default App;
