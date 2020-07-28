import React, { useContext, useState, useEffect } from "react";
import Select from "./Select";
// import { SelectContext, DataContext } from "../datacontext/DataContext";
import getDataToSelect from "../getDataToSelect";
import getDataApi from "../getDataApi";
import { FilterContext, DataContext } from "../datacontext/DataContext";
import getStates from "../GetFiltered";

function FilterZone() {
  const filter = { rooms: "", parks: "", baths: "", types: "" };
  const [dataFilter, setDataFilter] = useState();
  const [filters, setFilters] = useState(filter);
  const [dataTotal, setDataTotal] = useState();

  const { fn } = useContext(DataContext);
  console.log(fn);
  async function getData() {
    const data = await getDataApi();
    const dataToFilter = getDataToSelect(data);
    console.log(dataToFilter);
    setDataFilter(dataToFilter);
    setDataTotal(data);
    fn(data);
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const filtered = getStates(dataTotal, filters);
    const dataToFilter = getDataToSelect(filtered);
    setDataFilter(dataToFilter);
    fn(filtered);
  }, [filters]);

  function onChangeOption(event, option) {
    console.log("cambia");
    let dataOption = event.target.value;
    if (dataOption === "Todas") {
      dataOption = "";
    } else dataOption = Number(dataOption);
    switch (option) {
      case "rooms":
        setFilters({ ...filters, rooms: dataOption });
        console.log("rooms");
        break;
      case "baths":
        setFilters({ ...filters, baths: dataOption });
        break;
      case "parks":
        setFilters({ ...filters, parks: dataOption });
        break;
      case "types":
        if (event.target.value !== "Todas") {
          setFilters({ ...filters, types: event.target.value });
        } else {
          setFilters({ ...filters, types: "" });
        }
        break;
      default:
        break;
    }
  }

  function resetFilters() {
    setFilters(filter);
    getData();
  }

  return (
    <>
      {dataFilter ? (
        <div className="alert alert-success">
          <FilterContext.Provider
            value={{ data: filters.rooms, fn: onChangeOption }}
          >
            <div>
              <label className="mr-2">Nº Habitaciones:</label>
              <Select name="rooms" options={dataFilter.rooms} />
            </div>
          </FilterContext.Provider>
          <FilterContext.Provider
            value={{ data: filters.baths, fn: onChangeOption }}
          >
            <div>
              <label>Nº Baños</label>
              <Select name="baths" options={dataFilter.baths} />
            </div>
          </FilterContext.Provider>
          <FilterContext.Provider
            value={{ data: filters.parks, fn: onChangeOption }}
          >
            <div>
              <label>Nº plazas parking</label>
              <Select name="parks" options={dataFilter.parks} />
            </div>
          </FilterContext.Provider>
          <FilterContext.Provider
            value={{ data: filters.types, fn: onChangeOption }}
          >
            <div>
              <label>Tipo de inmueble</label>
              <Select name="types" options={dataFilter.types} />
            </div>
          </FilterContext.Provider>
          <button onClick={resetFilters}>Resetear filtros</button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
export default FilterZone;
