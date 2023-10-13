import styles from "@/styles/layout.module.scss";
import { ReactNode } from "react";
import ViewTransition from "../ViewTransition";
import Nav from "./Nav";

type LayoutProps = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header className={styles.header}>
        <ViewTransition href="/">
          <h1 className={styles.logo}>ViewTransitionApp</h1>
        </ViewTransition>
      </header>
      <Nav />
      <div className={styles.public}>
      {children}
      </div>
      <footer className={styles.footer}>
        <a className={styles.copy} href="https://storyset.com/work">
          Work illustrations by Storyset 
        </a>
        <div> / Icons made by <a href="https://www.flaticon.com/authors/iconkanan" title="IconKanan"> IconKanan </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
      </footer>
    </>
  );
};

export default Layout;
