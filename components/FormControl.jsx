import { useState } from 'react';
import styles from '../styles/Forms.module.css'

export default function FormControl() {
    const [courriel, setCourriel] = useState('');
    const handleCourrielChange = (event) => setCourriel(event.target.value);

    const [motPasse, setMotPasse] = useState('');
    const handleMotPasseChange = (event) => setMotPasse(event.target.value);

    const [rappeler, setRappeler] = useState(false);
    const handleRappelerChange = (event) => setRappeler(event.target.checked);

    const [erreurCourriel, setErreurCourriel] = useState('');
    const validateCourriel = () => {
        if(!courriel){
            setErreurCourriel('Le courriel est requis');
            return false;
        }
        else if(!courriel.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i)) {
            setErreurCourriel('Le courriel n\'est pas valide');
            return false;
        }
        else {
            setErreurCourriel('');
            return true;
        }
    }

    const [erreurMotPasse, setErreurMotPasse] = useState('');
    const validateMotPasse = () => {
        if(!motPasse){
            setErreurMotPasse('Le mot de passe est requis');
            return false;
        }
        else if(motPasse.length < 8) {
            setErreurMotPasse('Le mot de passe est trop court');
            return false;
        }
        else {
            setErreurMotPasse('');
            return true;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        let validCourriel = validateCourriel();
        let validMotPasse = validateMotPasse();

        if(validCourriel && validMotPasse) {
            let data = {
                courriel,
                motPasse,
                rappeler
            }

            console.log(data);
        }
        
    }

    return <form className={styles.form} noValidate onSubmit={handleSubmit}>
        <label>
            Courriel:
            <input 
                type="email" 
                value={courriel} 
                onChange={handleCourrielChange} 
                onBlur={validateCourriel} />
        </label>
        {erreurCourriel &&
            <div className={styles.erreur}>
                {erreurCourriel}
            </div>
        }

        <label>
            Mot de passe:
            <input 
                type="password" 
                value={motPasse} 
                onChange={handleMotPasseChange}
                onBlur={validateMotPasse} />
        </label>
        {erreurMotPasse &&
            <div className={styles.erreur}>
                {erreurMotPasse}
            </div>
        }

        <label>
            Se rappeler de moi:
            <input 
                type="checkbox" 
                className={styles.checkbox} 
                value={rappeler} 
                onChange={handleRappelerChange} />
        </label>

        <input type="submit" value="Connecter" />
    </form>
}