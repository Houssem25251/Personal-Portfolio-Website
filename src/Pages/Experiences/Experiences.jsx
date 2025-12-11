import {useState,useEffect} from 'react';
import {Header} from '../Header';
import Year1 from '../../assets/Experiences/Year1.png';
import './Experiences.css';

class Experience {
    id;
    title;
    company;
    duration;
    description;
    image;
    constructor(i,a,b,c,d,e){
        this.id=i;
        this.title=a;
        this.company=b;
        this.duration=c;
        this.description=d;
        this.image=e;
    }
}
const FirstYear=new Experience(crypto.randomUUID,"First Year Internship","Aframat","1 Month","I created a personal resume website to showcase my skills, projects, and professional experience, using modern web technologies (HTML,CSS,JavaScript) to make it visually appealing and easy to navigate.",Year1);
function ExperienceCard({a}){
    const [state,setState]=useState(false);
    function updateState(){
        setState(!state);
    } 
    return(
        <div className={`Experience-Card ${state? "yes":""}`}>
            <img className="Experience-Image" src={Year1}/>
            <p className={`Experience-Title ${state? "yes":""}`}>{a.title}</p>
            {state && <p className="Experience-Company">{a.company}</p>}
            {state && <p className="Experience-Duration">{a.duration}</p>}
            {state && <p className="Experience-Description">{a.description}</p>}
            {!state && <button className={`Experience-Button ${state? "yes":""}`} onClick={updateState}>Expand</button>}
            {state && <button className={`Experience-Button ${state? "yes":""}`} onClick={updateState}>Collapse</button>}
        </div>
    )
}
export function Experiences(){
    const [Experiences,setExperiences]=useState([]);
    function AddExperience(){
        setExperiences([...Experiences,FirstYear]);
    }
    useEffect(()=>{AddExperience()},[])
    return(
        <>
            <Header />
            {Experiences.map((b)=>{
                return(
                    <ExperienceCard a={b}/>
                )
            })}
        </>
    )
}