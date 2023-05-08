import './App.css'
import { Header } from "./layout/header/Header";
import { useTheme } from "./context/ThemeProvider";
import { useFont } from "./context/FontProvider";
import { SearchWord } from "./components/search-word/SearchWord";
import axios from "axios";
import { useState } from "react";
import { Definition } from "./components/definition/Definition";


function App() {
    const { theme } = useTheme();
    const { font } = useFont();
    const [definition, setDefinition] = useState<null | unknown>(null);
    const handleWordSearch = (word) => {
        axios
            .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then((wordDefinition) => {
                setDefinition(wordDefinition?.data);
            })
    }

    return (
        <main className={`${theme} ${font}`}>
            <section className='content'>
                <Header/>
                <SearchWord wordToSearch={handleWordSearch} />
                <Definition wordDefinition={definition} />
            </section>
        </main>
    )
}

export default App
