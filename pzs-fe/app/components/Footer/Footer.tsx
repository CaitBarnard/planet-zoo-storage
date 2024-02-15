import { Text, Container } from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <MantineLogo size={30} />
          <Text size="xs" c="dimmed" className={classes.description}>
            Build fully functional accessible web applications faster than ever
          </Text>
        </div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024 via mantine.dev. All rights reserved.
        </Text>
      </Container>
    </footer>
  );
}
