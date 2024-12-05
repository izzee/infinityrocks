
import styles from '@/styles/projects/Calendar2025.module.scss'

const Calendar2025 = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.sky}>
          <div className={styles.cloudsleft}/>
          <div className={styles.cloudsright}/>
        </div>

        <div className={styles.bottom}>
          <div className={styles.grass}/>
          
        </div>

      </div>
    </>
  );
};

export default Calendar2025