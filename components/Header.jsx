import Image from 'next/image'
import Link from 'next/link'
import Menu from './Menu'
import { useTheme } from './ThemeProvider'
import { useLocale } from './LocaleProvider'

import logo from '../public/logo.png'
import styles from '../styles/Header.module.css'
import { FormattedMessage } from 'react-intl'

export default function Header() {
    let [theme, setTheme] = useTheme();
    const handleThemeChange = (event) => {
        setTheme(event.target.checked ? 'dark' : 'light');
    }

    let [locale, setLocale] = useLocale();
    const handleLocaleChange = (event) => {
        setLocale(event.target.checked ? 'en' : 'fr');
    }

    return <header className={styles.header}>
        <Link href="/">
            <Image src={logo} alt="Logo" className={styles.logo} />
        </Link>
        
        <h1 className={styles.titre}>
            <FormattedMessage id="app.header.titre" /> 
        </h1>
        <Menu />
        <label>
            Theme: 
            <input 
                type="checkbox" 
                checked={theme === 'dark'} 
                onChange={handleThemeChange} />
        </label>
        <label>
            Langue: 
            <input 
                type="checkbox" 
                checked={locale === 'en'} 
                onChange={handleLocaleChange} />
        </label>
    </header>
}
