import Header from "./Header";

import styles from "../styles/Layout.module.css";
import { useTheme } from "./ThemeProvider";

export default function Layout({children}) {
    const [theme, setTheme] = useTheme()

    return <div className={styles.layout} data-theme={theme}>
        <Header />
        {children}
        {/*Footer*/}
    </div>
}