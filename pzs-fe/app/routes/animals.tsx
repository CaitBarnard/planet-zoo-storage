import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { getAnimals } from "~/api";
import Layout from "~/components/Layout";

export const meta: MetaFunction = () => {
  return [
    { title: "Animals" },
    { name: "description", content: "List of Animals" },
  ];
};

export default function Animals() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getAnimals().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <Layout>
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
    </Layout>
  );
}
