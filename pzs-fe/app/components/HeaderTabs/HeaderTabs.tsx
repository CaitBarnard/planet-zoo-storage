import { Container, Group, Tabs } from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./HeaderTabs.module.css";

const tabs = ["Home", "Animals", "Species", "Trading"];

export function HeaderTabs() {
  const items = tabs.map((tab) => (
    <Tabs.Tab value={tab} key={tab}>
      {tab}
    </Tabs.Tab>
  ));

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
          >
            <Tabs.List>{items}</Tabs.List>
          </Tabs>
        </Group>
      </Container>
    </div>
  );
}
