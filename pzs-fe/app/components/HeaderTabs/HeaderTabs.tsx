import { Container, Group, Tabs } from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./HeaderTabs.module.css";
import { tabs } from "~/constants";
import { useLocation, useNavigate } from "@remix-run/react";

export function HeaderTabs() {
  const items = Object.values(tabs).map((tab) => (
    <Tabs.Tab value={tab} key={tab}>
      {tab}
    </Tabs.Tab>
  ));

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const tabValue = pathname === "/" ? tabs.Home : pathname.substring(1);

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection} size="lg">
        <Group justify="space-between">
          <MantineLogo size={28} />
        </Group>
      </Container>
      <Container size="lg">
        <Group justify="center">
          <Tabs
            defaultValue="Home"
            variant="outline"
            visibleFrom="sm"
            classNames={{
              root: classes.tabs,
              list: classes.tabsList,
              tab: classes.tab,
            }}
            value={tabValue}
            onChange={(value) =>
              navigate(value === tabs.Home ? "/" : `/${value}`)
            }
          >
            <Tabs.List>{items}</Tabs.List>
          </Tabs>
        </Group>
      </Container>
    </div>
  );
}
