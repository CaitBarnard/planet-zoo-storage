import classes from './MainContent.module.css';

export function MainContent({ children }: { children: React.ReactNode }) {
  return <main className={classes.mainContent}>{children}</main>;
}
