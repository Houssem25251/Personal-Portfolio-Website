import {useState,useEffect} from 'react';
import {Header} from '../Header.jsx';
import Cpp from '../../assets/Skills/C++.png';
import JS from '../../assets/Skills/JS.png';
import HTML from '../../assets/Skills/HTML.png';
import CSS from '../../assets/Skills/CSS.png';
import React from '../../assets/Skills/React.png';
import './Skills.css';
export class Skill{
    constructor(id,name,image,type){
        this.id=id;
        this.name=name;
        this.image=image;
        this.type=type;
    }
}
function SkillCard({skill}){
    const [active,setState]=useState(false);
    function updateState(){
        setState(!active);
    }
    return(
        <div key={skill.id} className={`Skill-Container ${active? "state":""}`}>
            {active===true && <img className="Skill-Image" src={skill.image}/>}
            <p className={`Skill-Text ${active? "state":""} ${active? skill.name:""}`}>{skill.name}</p>
            {active===true && <p className={`Skill-Text-Text ${skill.name}`}>{skill.type}</p>}
            {active===false && <button onClick={updateState} className={`Skill-Button ${active? "state":""} ${active? skill.name:""}`}>Expand</button>}
            {active===true && <button onClick={updateState} className={`Skill-Button ${active? "state":""} ${active? skill.name:""}`}>Collapse</button>}
        </div>
    )
}

export function Skills(){
    const [ArrayS,setArrayS]=useState([]);
    function AddSkill(){
        const newskill1 = new Skill(crypto.randomUUID(),"Cpp",Cpp,"Problem Solving");
        const newskill2 = new Skill(crypto.randomUUID(),"HTML",HTML,"Web Development");
        const newskill3 = new Skill(crypto.randomUUID(),"CSS",CSS,"Web Development");
        const newskill4 = new Skill(crypto.randomUUID(),"JS",JS,"Web Development");
        const newskill5 = new Skill(crypto.randomUUID(),"React",React,"Web Development");
        setArrayS([...ArrayS,newskill1,newskill2,newskill3,newskill4,newskill5]);
    }
    useEffect(()=>{AddSkill();},[])
    return(
            <>
                <Header />
                <div className="Skills-Container">
                    {ArrayS.map((skill)=>{
                        return(
                            <SkillCard key={skill.id} skill={skill}/>
                        )
                    })}
                </div>
            </>        
    )
}