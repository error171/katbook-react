import axios from "axios";

export const request = axios.create({
  baseURL: `https://api.mangadex.org/`,
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
