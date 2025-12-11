import './Header.css';
import {Link} from 'react-router';

export function Header(){
    return(
        <div className="Header-Container">
            <Link to="/" className="Link" >Home</Link>
            <Link to="/skills" className="Link">Skills</Link>
            <Link to="/experiences" className="Link">Experiences</Link>
            <Link to="/projects" className="Link">Projects</Link>
            <Link to="/contacts" className="Link">Contacts</Link>
            <Link to="/about" className="Link">About</Link>
        </div>
    )
}