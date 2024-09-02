import "./navbar.scss";
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/DarkModeContext";

const Navbar = ({userName}) => {

    const { toggle, darkMode } = useContext(DarkModeContext);
    const { currentUser } = useContext(AuthContext);

    return (
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{textDecoration: "none"}}>
                    <span>Jewelry Crafter's Forum</span>
                </Link>
                <LoginIcon />
                <HomeIcon />
                {darkMode ? (
                    <LightModeIcon onClick={toggle} />
                ) : ( 
                    <DarkModeIcon onClick={toggle} />
                )}
            </div>
            <div className="right">
                <div className="user">
                    <left>Welcome, { currentUser.name }!</left>
                </div>
                <ContactMailIcon />
                <AppRegistrationIcon />
                <LogoutIcon />
            </div>
        </div>
    )
};

export default Navbar
