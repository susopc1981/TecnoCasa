// import React from "react";

function getDataToSelect(dataApi) {
  if (dataApi) {
    const baths = getBaths(dataApi);
    const parks = getParking(dataApi);
    const rooms = getRooms(dataApi);
    const types = getTypes(dataApi);
    const dataSelects = { baths, parks, rooms, types };
    return dataSelects;
  }
  return;
}

function getTypes(data) {
  const finalTypes = [];
  data.forEach((dataApi) => {
    const result = finalTypes.find((value2) => value2 === dataApi.type.name);
    if (result === undefined) {
      finalTypes.push(dataApi.type.name);
    }
  });
  return finalTypes.sort();
}

function getBaths(data) {
  const finalBaths = [];
  data.forEach((dataApi) => {
    const result = finalBaths.find(
      (value) => value === dataApi.bathroom_amount
    );
    if (result === undefined) {
      finalBaths.push(dataApi.bathroom_amount);
    }
  });
  return finalBaths.sort();
}

function getParking(data) {
  const finalParks = [];
  data.forEach((ApiData) => {
    const result = finalParks.find(
      (park) => park === ApiData.parking_lot_amount
    );
    if (result === undefined) {
      finalParks.push(ApiData.parking_lot_amount);
    }
  });
  return finalParks.sort();
}

function getRooms(data) {
  const finalRooms = [];
  data.map((ApiData) => {
    const result = finalRooms.find((room) => room === ApiData.room_amount);
    if (result === undefined) {
      finalRooms.push(ApiData.room_amount);
    }
  });
  return finalRooms.sort();
}

export default getDataToSelect;
