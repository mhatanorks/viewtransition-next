import styles from "@/styles/nav.module.scss";
import ViewTransition from "../ViewTransition";

const Nav = () => {
  return (
    <nav className={styles.nav}>
    <ul
    className={styles.items}
    >
      <ViewTransition href={"/about"}>
        <li className={styles.tag}>
          <button>ABOUT</button>
        </li>
      </ViewTransition>
      <ViewTransition href={"/blog"}>
        <li className={styles.tag}>
          <button>ARTICLES</button>
        </li>
      </ViewTransition>
    </ul>
  </nav>
  )
}

export default Nav
