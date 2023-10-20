import axios from "axios";

export default axios.create({
  baseURL: "https://metavagasbackend-production.up.railway.app/v1",
});
