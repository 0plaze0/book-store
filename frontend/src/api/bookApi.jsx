import axios from "axios";
const base = import.meta.env.VITE_BASE_URL;
export default axios.create({
  baseURL: base,
});
