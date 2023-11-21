export const Requisition = (quantity) => {
  var endpoints = [];
  for (let index = 1; index <= quantity; index++) {
    endpoints.push(`https://pokeapi.co/api/v2/pokemon/${index}/`);
  }
  return endpoints;
};

export const RequisitionRandom = (quantity) => {
  var endpoints = [];
  for (let index = 1; index <= quantity; index++) {
    endpoints.push(`https://pokeapi.co/api/v2/pokemon/${index + (Math.floor(Math.random() * (600 - 10)) + 10)}/`);
  }
  return endpoints;
};
