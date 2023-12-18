import styles from '@/styles/components/Nav.module.scss'

const Nav = ({collapsed}) => {

  const anchorTag = (year, index) => {
    return (
      <a
        key={`${index}-${year}`}
        className={styles.anchor}
        href={`#${year}`}
      >
        {year}
      </a>
    )
  }

  const anchorsFromYears = () => {
    const years = ['2024', '2023', '2022', '∞ ∞ ∞']
    console.log(years)
    return (
      years.map((year, index) => {
        return anchorTag(year ,index)
      })
    )
  }

  return (
    <div className={`${styles.wrapper} ${collapsed && styles.collapsed}` }>
      <div className={styles.hero}/>
      <nav className={styles.nav}>
        {
          anchorsFromYears()
        }
      </nav>
    </div>

  );
};

export default Nav