import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODgyZDYyYzAzZDkxMjc1ZmYzODhmZmVkNDBmNzk3NyIsIm5iZiI6MTczOTk4NTExMi4wMDQ5OTk5LCJzdWIiOiI2N2I2MTBkN2QyOGU4N2UwZTVlM2UzNTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9teo5e90I_2x50rS183b8dPgTfKeXeg_PHSn8qzrBqA";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

export default axiosInstance;
