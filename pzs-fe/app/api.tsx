import axios from "axios";

export const getAnimals = () => {
  return axios
    .get("http://localhost:8000/api/animals/")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });
};
