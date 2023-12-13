import styles from '@/styles/components/Nav.module.scss'

const Nav = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}/>
      <nav className={styles.nav}>
        <div className={styles.anchor}>2024</div>
        <div className={styles.anchor}>2023</div>
        <div className={styles.anchor}>2022</div>
        <div className={styles.anchor}>∞ ∞ ∞</div>
      </nav>
    </div>

  );
};

export default Nav