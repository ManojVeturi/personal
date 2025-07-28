import instagram from './assets/instagram.jpg';
import linkedin from './assets/linkedin.jpg';
import github from './assets/github.jpg';
import facebook from './assets/facebook.jpg';

function Footer() {

    return(
        <footer className="footer">
            <div className="social-links">
                <a href="https://www.linkedin.com/in/manoj-veturi-640166325" target="_main">
                <img src={linkedin} alt="Description" height="25px" width="25px" />
                </a>
                <a href="https://github.com/ManojVeturi" target="_main">
                <img src={github} alt="Description" height="25px" width="25px"/>
                </a>
                <a href="https://www.instagram.com/manoj_veturi" target="_main">
                <img src={instagram} alt="Description" height="25px" width="25px" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61565756071570" target="_main">
                <img src={facebook} alt="Description" height="25px" width="25px" />
                </a>
            </div>
            <p>&copy; {new Date().getFullYear()} ManojVeturi All Rights are Reserved</p>
        </footer>
    );
}

export default Footer