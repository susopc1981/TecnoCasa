function getStates(totalStates, filters) {
  let result = totalStates;
  if (filters.rooms !== "") {
    result = result.filter((value) => value.room_amount === filters.rooms);
  }
  if (result) {
    console.log(result.length);
  }
  if (filters.baths !== "") {
    result = result.filter((value) => value.bathroom_amount === filters.baths);
  }
  if (filters.parks !== "") {
    result = result.filter(
      (value) => value.parking_lot_amount === filters.parks
    );
  }
  if (filters.types !== "") {
    result = result.filter((value) => value.type.name === filters.types);
  }
  return result;
}

export default getStates;
