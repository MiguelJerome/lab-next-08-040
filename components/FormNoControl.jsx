import { useRef, useState } from "react";

import styles from "../styles/Forms.module.css"

export default function FormNoControl() {
    const inputCourriel = useRef(null);
    const inputMotPasse = useRef(null);
    const inputRappeler = useRef(null);
    const form = useRef(null);

    const [erreurCourriel, setErreurCourriel] = useState('');
    const validateCourriel = () => {
        if(inputCourriel.current.validity.valid) {
            setErreurCourriel('');
        }
        else {
            if(inputCourriel.current.validity.valueMissing) {
                setErreurCourriel('Le courriel est requis');
            }
            else if(inputCourriel.current.validity.typeMismatch) {
                setErreurCourriel('L\'adresse courriel n\'est pas valide');
            }
        }
    }

    const [erreurMotPasse, setErreurMotPasse] = useState('');
    const validateMotPasse = () => {
        if(inputMotPasse.current.validity.valid) {
            setErreurMotPasse('');
        }
        else {
            if(inputMotPasse.current.validity.valueMissing) {
                setErreurMotPasse('Le mot de passe est requis');
            }
            else if(inputMotPasse.current.validity.tooShort) {
                setErreurMotPasse('Le mot de passe doit avoir au moins 8 caractères');
            }
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        validateCourriel();
        validateMotPasse();

        if(form.current.checkValidity()) {
            let data = {
                courriel: inputCourriel.current.value,
                motpasse: inputMotPasse.current.value,
                rappeler: inputRappeler.current.checked
            }

            console.log(data);
        }
    }

    return <form className={styles.form} noValidate ref={form} onSubmit={handleSubmit}>
        <label>
            Courriel:
            <input type="email" ref={inputCourriel} required onBlur={validateCourriel} />
        </label>
        {erreurCourriel &&
            <div className={styles.erreur}>
                {erreurCourriel}
            </div>
        }

        <label>
            Mot de passe:
            <input type="password" ref={inputMotPasse} required minLength="8" onBlur={validateMotPasse} />
        </label>
        {erreurMotPasse &&
            <div className={styles.erreur}>
                {erreurMotPasse}
            </div>
        }

        <label>
            Se rappeler de moi:
            <input type="checkbox" className={styles.checkbox} ref={inputRappeler} defaultChecked />
        </label>

        <input type="submit" value="Connecter" />
    </form>
}