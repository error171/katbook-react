import axios from "axios";

export const request = axios.create({
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
