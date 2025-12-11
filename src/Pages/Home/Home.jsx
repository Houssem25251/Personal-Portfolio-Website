import {Header} from '../Header.jsx';
import './Home.css';
export function Home(){
    return(
        <div className="Home-Main">
            <Header />
            <p className="Home-Text">Hello there,I'm<span className="Sub-Text"> Houssem Eddine Zaier<br/></span>
                <span className="Text">I am currently in my second year of engineering studies, pursuing computer science.</span>
            </p>
        </div>
    )
}