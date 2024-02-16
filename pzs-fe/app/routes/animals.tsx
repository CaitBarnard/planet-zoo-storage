import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { getAnimals } from "~/api";
import Layout from "~/components/Layout";
import { TableSort } from "~/components/TableSort/TableSort";

export const meta: MetaFunction = () => {
  return [
    { title: "Animals" },
    { name: "description", content: "List of Animals" },
  ];
};

export default function Animals() {
  const [data, setData] = useState(Object);

  useEffect(() => {
    getAnimals().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <Layout>
      <TableSort dataObject={data}/>
    </Layout>
  );
}
