import { useForm } from 'react-hook-form'

import styles from '../styles/Forms.module.css'

export default function FormLibrairie() {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = async (data) => {
        let response = await fetch('/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
    }

    return <form className={styles.form} noValidate onSubmit={handleSubmit(onSubmit)}>
        <label>
            Courriel:
            <input 
                type="email" 
                {...register('courriel', {
                    required: 'Le courriel est requis', 
                    pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i, message: 'Le courriel est invalide'}
                })} />
        </label>
        {errors.courriel &&
            <div className={styles.erreur}>
                {errors.courriel.message}
            </div>
        }

        <label>
            Mot de passe:
            <input 
                type="password" 
                {...register('motpasse', {
                    required: 'Le mot de passe est requis',
                    minLength: { value: 8, message: 'Le mot de passe est trop court'}
                })} />
        </label>
        {errors.motpasse &&
            <div className={styles.erreur}>
                {errors.motpasse.message}
            </div>
        }

        <label>
            Se rappeler de moi:
            <input type="checkbox" className={styles.checkbox} {...register('rappeler')} />
        </label>

        <input type="submit" value="Connecter" />
    </form>
}