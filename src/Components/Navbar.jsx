import { NavLink, Link } from "react-router-dom";
import LogoDT from '../assets/icon-dt.png';
import LogoMB from '../assets/icon-mb.png';
import { useEffect, useState } from "react";


const Navbar = () => {
    
    const [logo, setLogo] = useState(LogoDT);

    const handleLogoChange = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 1279) {
            setLogo(LogoMB);
        } else {
            setLogo(LogoDT);
        }
    };

    useEffect(() => {
        handleLogoChange(); 
        window.addEventListener("resize", handleLogoChange);
        return () => {
            window.removeEventListener("resize", handleLogoChange);
        };
    }, []);

    return (
        <header className="static w-20 xl:w-60 h-[100vh] p-3 border-r-3 border-[#2A282C] bg-black">
            <Link to="/">
                <img src={logo} alt="navbar-icon" />
            </Link>
            <nav>
                
            </nav>
        </header>
    )
}

export default Navbar