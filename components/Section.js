import styles from '@/styles/components/Section.module.scss'
import Calendar2024 from '@/components/themes/Calendar2024.js'
import BumperSticker2024 from '@/components/themes/BumperSticker2024.js'


const Section = ({data}) => {

  const addThemeHTML = () => {
    switch (data.theme) {
      case 'calendar2024': 
        return (
          <Calendar2024 />
        )
      case 'bumpersticker2024': 
        return (
          <BumperSticker2024 />
        )
      default:
        return ""
    }
  }
  
  return (
    <div className={`${styles.section} ${styles[data.theme] || ''}`}>
      <div className={styles.title}>
        {data.title}
      </div>
      <div className={styles.body}>
        {(() => addThemeHTML())()}
      </div>
    </div>

  );
};

export default Section