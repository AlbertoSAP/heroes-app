import axios from "axios";

const token = "4283429655099131";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
export const ApiUrlConfig = axios.create({
  baseURL: `https://www.superheroapi.com/api.php/${token}/`,
});
