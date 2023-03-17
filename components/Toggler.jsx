import { useState } from 'react'

import styles from '../styles/Toggler.module.css'

export default function Toggler({titre, visible, children}) {
    const [visibleState, setVisible] = useState(visible);
    
    const toggler = () => {
        setVisible(!visibleState);
    }

    return <>
        <div className={styles.header} onClick={toggler}>
            {titre}
        </div>
        {visibleState &&
            <div className={styles.content}>
                {children}
            </div>
        }

        {/*
            Classe conditionnelle:
            <div className={styles.content + ' ' + (visibleState ? '' : styles.hidden)}>
                {children}
            </div>
        */}
        
    </>
}