import { createContext, useContext, useMemo, useState } from "react";
import { Options, PropsValue } from "react-select";

export const fontOptions: Options<any> = [
    { value: 'sans', label: 'Sans Serif'},
    { value: 'serif', label: 'Serif'},
    { value: 'mono', label: 'Mono'},
];

const FontContext: any = createContext(fontOptions[0].value);

export const useFont = () => {
    const context = useContext(FontContext);
    if (context === undefined) {
        throw new Error('useValue must be used within a FontProvider')       }
    return context
}

export const getFontOption = (fontValue: string): any => {
    const selectedFontIndex = fontOptions.findIndex(font => font.value === fontValue);
    return selectedFontIndex ? fontOptions[selectedFontIndex] : fontOptions[0];
}

const FontProvider = ({children}) => {
    const [font, setFont] = useState<string>(fontOptions[0].value);

    const fontObject = useMemo(() => {
        setFont(font);
        localStorage.setItem('font', font);
       return {font, setFont}
    }, [font, setFont]);

    return <FontContext.Provider value={fontObject}>{children}</FontContext.Provider>
}

export default FontProvider;
