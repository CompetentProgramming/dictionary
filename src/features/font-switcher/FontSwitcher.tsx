import Select from 'react-select'
import { fontOptions, getFontOption, useFont } from "../../context/FontProvider";
import './FontSwitcher.css';

export const FontSwitcher = () => {
    const { font, setFont } = useFont();
    const defaultValue = getFontOption(font);

    const selectChange = (value: any) => {
        setFont(value.value)
    }

    return (
        <>
            <Select
                unstyled={true}
                classNamePrefix={'font-switcher'}
                defaultValue={defaultValue}
                onChange={selectChange}
                options={fontOptions}
                isSearchable={false}
            />
        </>
    );
}
