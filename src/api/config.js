import axios from "axios";

export const instance = axios.create({
  baseURL: "https://gorest.co.in/public/v1",
  headers: {
    "Content-Type": "application/json",
  },
});
