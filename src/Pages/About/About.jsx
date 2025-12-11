import WhoAmI from '../../assets/About/1.jpg';
import Motivation from '../../assets/About/2.jpg';
import Values from '../../assets/About/3.jpg';
import Hobbies from '../../assets/About/4.jpg';
import Goals from '../../assets/About/5.jpg';
import {Header} from '../Header.jsx';
import {useState,useEffect} from 'react';
import './About.css';
class About{
    id;
    title;
    description;
    image;
    constructor(i,a,d,e){
        this.id=i;
        this.title=a;
        this.description=d;
        this.image=e;
    }
}
const FirstAbout=new About(crypto.randomUUID(),"Who Am I?","I’m a software engineering student who builds clean, simple, and user-friendly applications. I focus on improving my skills through real, practical work and delivering results that meet clear objectives.",WhoAmI);
const SecondAbout=new About(crypto.randomUUID(),"My Motivation","I focus on creating software that is efficient, well-structured, and genuinely useful to users.",Motivation);
const ThirdAbout=new About(crypto.randomUUID(),"My Values","I prioritize discipline, professionalism, and precision in my work, and I aim to deliver solutions that are clear, reliable, and well-designed.",Values);
const FourthAbout=new About(crypto.randomUUID(),"My Hobbies","Outside of technology, I practice kickboxing to develop physical and mental rigor. I also enjoy video games, reading, and exploring new topics.",Hobbies);
const FifthAbout=new About(crypto.randomUUID(),"My Goals","My long-term goal is to become a well-rounded software engineer, contributing to innovative projects that have a meaningful and positive impact.",Goals);
function AboutCard({a}){
    return(
        <div className="About-Card">
            <img className="About-Image" src={a.image}/>
            <p className="About-Title">{a.title}</p>
            <p className="About-Text">{a.description}</p>
        </div>
    )
}

export function Abouts(){
    const[AboutArray,setAboutArray]=useState([]);
    function addAbout(){
        setAboutArray([...AboutArray,FirstAbout,SecondAbout,ThirdAbout,FourthAbout,FifthAbout]);
    }
    useEffect(()=>{addAbout()},[]);
    return(
        <>
            <Header />
            <div className="Abouts-Card">
                {AboutArray.map((c)=>{
                    return(
                        <AboutCard a={c} key={c.id}/>
                    )
                })}
            </div>
        </>    
    )
}