import './App.css'
import { Header } from "./layout/header/Header";
import { useTheme } from "./context/ThemeProvider";


function App() {
    const { theme } = useTheme();

    return (
        <main className={theme}>
            <section className='content'>
                <Header/>
            </section>
            {/*    search component*/}
            {/*     depends on the result it will be component info or no result block   */}
        </main>
    )
}

export default App
