import { Text } from "@mantine/core";
import type { MetaFunction } from "@remix-run/node";
import Layout from "~/components/Layout";

export const meta: MetaFunction = () => {
  return [
    { title: "Home Page" },
    { name: "description", content: "Home Page" },
  ];
};

export default function Index() {
  return (
    <Layout>
      <Text>Welcome to the home page</Text>
    </Layout>
  );
}
