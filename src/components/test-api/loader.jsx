import styles from './style.module.css'

const Loader = () => {
    return(
        <div className={styles.loader}>
                <div className={styles.circle}>
                    <div className={styles.dot}></div>
                    <div className={styles.outline}></div>
                </div>
                <div className={styles.circle}>
                    <div className={styles.dot}></div>
                    <div className={styles.outline}></div>
                </div>
                <div className={styles.circle}>
                    <div className={styles.dot}></div>
                    <div className={styles.outline}></div>
                </div>
                <div className={styles.circle}>
                    <div className={styles.dot}></div>
                    <div className={styles.outline}></div>
                </div>
        </div>
    )
}


export default Loader;