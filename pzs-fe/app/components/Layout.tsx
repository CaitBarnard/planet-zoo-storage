import React from "react";
import { HeaderTabs } from "./HeaderTabs/HeaderTabs";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <HeaderTabs />

    <main>{children}</main>

    <footer>Footer</footer>
  </>
);

export default Layout;
