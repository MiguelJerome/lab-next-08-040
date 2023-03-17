import { useEffect, useState } from "react"
import { useRouter } from "next/router"

import styles from '../styles/CompteARebours.module.css';

export default function CompteARebours({compte, href}) {
    const [nombre, setNombre] = useState(compte || 10);
    const router = useRouter();

    useEffect(() => {
        // Code exécuté au montage du composant
        // ===================================================================

        // Création de l'interval à chaque seconde
        let intervalId = setInterval(() => {
            // On modifie le nombre en fonction de sa valeur précédante
            setNombre((nombre) => {
                if (nombre > 0) {
                    // Si le nombre est plus grand que 0, on décrémente
                    return nombre - 1;
                }
                else {
                    // Si le nombre est égal à zéro, on stop l'interval
                    clearInterval(intervalId);

                    if(href) {
                        router.push(href);
                    }

                    return 0;
                }
            });
        }, 1000);
        
        // Code exécuté au démontage du composant
        // ===================================================================

        // Si on enlève le composant de la page, on stop l'interval
        return () => {
            clearInterval(intervalId);
        }
    }, [href, router]);

    return <div className={styles.compteARebours}>
        {nombre}
    </div>
}