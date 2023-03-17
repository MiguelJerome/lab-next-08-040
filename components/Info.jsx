import styles from '../styles/Info.module.css'

export default function Info(props) {
    return <div className={styles.info + ' ' + styles[props.color]}>
        {props.children}
    </div>
}