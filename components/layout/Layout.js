import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">
            <img src="/vhdfood.png" alt="vhdfood"></img>
          </Link>
        </div>
        <div className={styles.right}>
          <Link href="/menu">Menu</Link>
          <Link href="/categories">Categories</Link>
        </div>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a href="https://vahidhosseini.net" target="_blank" rel="noreferrer">
          VHD{" | "}
        </a>
        Next.js Project | VHD &copy; {new Date().getFullYear()}
      </footer>
    </>
  );
}

export default Layout;
