import axios from "axios";

export const getCoordsByAddress = (address: string) => {
  let addressEncoded = address.replaceAll(',','%2C');
  addressEncoded = addressEncoded.replaceAll(' ', '+');
  return axios.get(`${process.env.REACT_APP_GEOCODING_API}/geocoder/locations/onelineaddress?address=${addressEncoded}&benchmark=2020&format=json`);
};
