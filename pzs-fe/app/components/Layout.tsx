import React from "react";
import { HeaderTabs } from "./HeaderTabs/HeaderTabs";
import { Footer } from "./Footer/Footer";
import { MainContent } from "./MainContent/MainContent";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <HeaderTabs />

    <MainContent>{children}</MainContent>

    <Footer />
  </>
);

export default Layout;
