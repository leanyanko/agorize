// https://my-json-server.typicode.com/meinou/fake-api/products
//620*380


import axios from "axios";

const productService = {};
const baseUrl = "https://my-json-server.typicode.com/meinou/fake-api/products";

productService.getAll = () => {
  return axios.get(baseUrl);
};

export default productService;