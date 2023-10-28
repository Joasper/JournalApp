import axios from "axios";

export const CloudinaryApi = axios.create({
  baseURL: "https://api.cloudinary.com/v1_1",
});
