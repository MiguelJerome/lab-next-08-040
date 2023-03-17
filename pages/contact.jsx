import Head from 'next/head';
import { useLocale } from '../components/LocaleProvider';
import { useTheme } from '../components/ThemeProvider';

export default function Contact() {
    const [theme, setTheme] = useTheme();
    const [locale, setLocale] = useLocale();

    return <>
        <Head>
            <title>Laboratoire - Contact</title>
            <meta name="description" content="Formulaire de contact pour nous poser des questions par courriel." />

            <meta property="og:title" content="Laboratoire - Contact" />
            <meta property="og:description" content="Formulaire de contact pour nous poser des questions par courriel." />
            <meta property="og:image" content="http://localhost:3000/logo.png" />
        </Head>

        <main>
            Contact
            <div>
                {theme}
            </div>
            <div>
                {locale}
            </div>
        </main>
    </>
}