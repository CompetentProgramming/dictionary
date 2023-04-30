import { Logo } from "../../components/logo/Logo";
import { FontSwitcher } from "../../features/font-switcher/FontSwitcher";
import { Theme } from "../../features/theme/Theme";
import './Header.css'

export const Header = () => {
    return (
        <header>
            <Logo/>
            <div className='right-side'>
                <FontSwitcher />
                <Theme />
            </div>
        </header>
    );
}
