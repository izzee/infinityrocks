
import styles from '@/styles/projects/Calendar2025.module.scss'

const Calendar2025 = ({children}) => {
  return (
    <>
      <div className={styles.main}>
      
      <div className={styles.background}>
        <div className={styles.sky}>
          <div className={styles.cloudsleft}/>
          <div className={styles.cloudsright}/>
        </div>

        <div className={styles.bottom}>
          <div className={styles.grass}/>
        </div>
      </div>

       <div className={styles.foreground}>
        <img className={styles.baseball} src="images/projects/calendar2025/baseball.gif"/>
          <div className={styles.product}>
             { children ? (
              <div className={styles.shopifywrapper}>
                {children}
              </div>
             ) : ( 
              <div className={styles.ctawrapper}>
                <img src="images/projects/calendar2025/cover.gif"/>
                <a className={styles.cta} href="/2025">Buy Now</a>
              </div>
             )}
          </div>
        </div>

      </div>
      
    </>
  );
};

export default Calendar2025