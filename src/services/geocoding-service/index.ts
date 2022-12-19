import axios from "axios";

export const getCoordsByAddress = (address: string) => {
  console.log(`fetching coords for address ${address}`);
  let addressEncoded = address.replaceAll(',','%2C');
  addressEncoded = addressEncoded.replaceAll(' ', '+');
  console.log(`addess encoded ${addressEncoded}`);
  return axios.get(`https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=${addressEncoded}&benchmark=2020&format=json`);
};
