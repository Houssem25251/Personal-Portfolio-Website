import FirstProject from '../../assets/Projects/1.png';
import SecondProject from '../../assets/Projects/2.png';
import HTML from '../../assets/Skills/HTML.png';
import CSS from '../../assets/Skills/CSS.png';
import JS from '../../assets/Skills/JS.png';
import React from '../../assets/Skills/React.png';
import {useState,useEffect} from 'react';
import {Header} from '../Header.jsx';
import './Projects.css';
import {Link} from 'react-router'; 


class Project{
    id;
    title;
    description;
    technologies;
    image;
    online;
    link;
    constructor(a,b,c,d,e,f,g){
        this.id=a;
        this.title=b;
        this.description=c;
        this.technologies=d;
        this.image=e;
        this.online=f;
    }
}

const ProjectFirst=new Project(crypto.randomUUID,"First Portfolio Project","My first personal portfolio website, designed to showcase my projects, skills, and learning journey as a software engineering student, with a clean and responsive layout.",
[HTML,CSS,JS],FirstProject,false);
const ProjectSecond=new Project(crypto.randomUUID,"Main Portfolio Website","My main personal portfolio website, designed to showcase my projects, experiences, and about and contact sections, with a clean, modern, and responsive layout, representing a more advanced and polished version of my first portfolio.",
[HTML,CSS,JS,React],SecondProject,true);

function ProjectCard({p}){
        return(
            <div className="Project-Main-Container">
                    <img className="Project-Main-Image" src={p.image} />
                    <p className="Project-Title">{p.title}</p>
                    <p className="Project-Description">{p.description}</p>
                    <div className="Project-Sub-Images-Container">
                        {p.technologies.map((b)=>{  
                            return(
                                <img className="Project-Sub-Image" src={b}/>
                            )
                        })}
                    </div>
                    {p.online && <Link to={p.Link} className="Project-Button">Link</Link>}
                    {!p.online && <p className="Project-Button">Available Locally Only</p>}
            </div>
        )
}

export function Projects(){
    const [ProjectsA,setProject]=useState([]);
    function updateProjectA(){
        setProject([...ProjectsA,ProjectFirst,ProjectSecond])
    }
    useEffect(()=>{updateProjectA()},[]);
    return(
        <>
            <Header />
            <div className="Projects-Container">
                {ProjectsA.map((c)=>{
                    return(
                        <ProjectCard p={c} /> 
                    )
                })}
            </div>   
        </>    
    )
}