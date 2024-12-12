import styles from '@/styles/components/Section.module.scss'
import Calendar2024 from '@/components/projects/Calendar2024.js'
import Calendar2025 from '@/components/projects/Calendar2025.js'
import BumperSticker2024 from '@/components/projects/BumperSticker2024.js'
import BumperSticker2025 from '@/components/projects/BumperSticker2025.js'


const Section = ({
  data
}) => {

  const addThemeHTML = () => {
    switch (data.theme) {
      case 'calendar2025': 
        return (
          <Calendar2025 />
        )
      case 'bumpersticker2025': 
        return (
          <BumperSticker2025 />
        )
      case 'calendar2024': 
        return (
          <Calendar2024 />
        )
      case 'bumpersticker2024': 
        return (
          <BumperSticker2024 />
        )
      default:
        return defaultSectionTheme()
    }
  }

  const defaultSectionTheme = () => {
    return (
      <div className={styles.content}>
        <p dangerouslySetInnerHTML={{__html: data.text}} />
        <img src={data.image} />
      </div>
    )
  }
  
  return (
    <div 
      className={`${styles.section} ${styles[data.theme] || ''}`}
    >
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