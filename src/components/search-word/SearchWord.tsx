import { useState } from "react";
import './SearchWord.css'


export const SearchWord = ({wordToSearch}) => {
    const [word, setWord] = useState<string>('');

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setWord(word);
            wordToSearch(word);
        }
    };

    return (
        <div className={'search-wrapper'}>
            <input onKeyDown={handleKeyDown} onChange={e => setWord(e.target.value)} type="text" placeholder={'Search for any word'}/>
            <button onClick={() => wordToSearch(word)} value={word} className={'search-button'} type={"button"}></button>
            <p className={'validation-error'}></p>
        </div>
    )
}
