import Select, { Options } from 'react-select'
import { useState } from "react";

const fontOptions: Options<any> = [
    { value: 'sans', label: 'Sans Serif'},
    { value: 'serif', label: 'Serif'},
    { value: 'mono', label: 'Mono'},
];

export const FontSwitcher = () => {
    const [selectedOption, setSelectedOption] = useState<any>(fontOptions[0]);

    return (
        <>
            <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={fontOptions}
            />
        </>
    );
}
