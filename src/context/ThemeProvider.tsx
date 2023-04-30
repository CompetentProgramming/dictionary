import { createContext, useContext, useMemo, useState } from "react";

function getDefaultTheme() {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
        return localTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

const ThemeContext: any = createContext(getDefaultTheme());

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useValue must be used within a ThemeProvider')       }
    return context
}

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(getDefaultTheme());

    const themeObject = useMemo(() => {
        setTheme(theme);
        localStorage.setItem('theme', theme);
       return {theme, setTheme}
    }, [theme, setTheme]);

    return <ThemeContext.Provider value={themeObject}>{children}</ThemeContext.Provider>
}

export default ThemeProvider;
