import styles from '@/styles/components/Title.module.scss'

const Title = ({collapsed}) => {

  return (
    <div className={`${styles.title} ${collapsed && styles.collapsed}`}>
      <div className={styles.marquee} />
    </div>

  );
};

export default Title