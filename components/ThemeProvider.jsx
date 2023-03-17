import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        let localStorageTheme = localStorage.getItem('theme');
        if(localStorageTheme) {
            setTheme(localStorageTheme);
        }
    }, []);

    return <ThemeContext.Provider value={[theme, setTheme]}>
        {children}
    </ThemeContext.Provider>
}

export function useTheme() {
    const [theme, setTheme] = useContext(ThemeContext);

    const setThemeWithStorage = (theme) => {
        setTheme(theme);
        localStorage.setItem('theme', theme);
    }

    return [theme, setThemeWithStorage];
}