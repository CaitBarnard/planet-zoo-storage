import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("api/animals")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Data:</h1>
        {data &&
          Object.keys(data || {}).map((key) => (
            <div key={key}>
              <h2>{key}</h2>
              <pre>{JSON.stringify(data[key], null, 2)}</pre>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
