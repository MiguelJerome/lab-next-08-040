import { createContext, useContext, useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import EnglishData from "../i18n/en.json";
import FrenchData from "../i18n/fr.json";

const messages = {
    en: EnglishData,
    fr: FrenchData
}

const LocaleContext = createContext()

export function LocaleProvider({children}) {
    const [locale, setLocale] = useState('fr');

    useEffect(() => {
        let navigatorLanguage = navigator.language.split('-')[0];
        let defaultLanguage = 
            localStorage.getItem('locale') || 
            (messages[navigatorLanguage] ? navigatorLanguage : 'fr');
        setLocale(defaultLanguage);
    });

    return <LocaleContext.Provider value={[locale, setLocale]}>
        <IntlProvider locale={locale} messages={messages[locale]}>
            {children}
        </IntlProvider>
    </LocaleContext.Provider>
}

export function useLocale() {
    const [locale, setLocale] = useContext(LocaleContext);
    
    const setLocaleWithStorage = (locale) => {
        localStorage.setItem('locale', locale);
        setLocale(locale)
    }
    
    return [locale, setLocaleWithStorage];
}
