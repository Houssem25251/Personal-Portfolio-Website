import {useState,useEffect} from 'react';
import {Header} from '../Header';
import './Contacts.css';

class Contact{
    type;
    value;
    id;
    constructor(a,b,c){
        this.type=a;
        this.value=b;
        this.id=c;
    }
}
const Contact1 = new Contact("Email","houssemeddinezaier@gmail.com",crypto.randomUUID());
const Contact2 = new Contact("Phone","+216 28414428",crypto.randomUUID());
const Contact3 = new Contact("Facebook","https://www.facebook.com/houssem.zaier.549",crypto.randomUUID());
export function Contacts(){
    const[Contacts,setContact]=useState([]);
    function AddContact(){
        setContact([...Contacts,Contact1,Contact2,Contact3]);
    }
    function ContactCard({n}){
        return(
                <div className="Contact-Card">
                    <p className="Contact-Text">{n.type}</p>
                    {n.type==="Facebook" && <a href="https://www.facebook.com/houssem.zaier.549" className="Contact-Value-Link">{n.value}</a>}
                    {n.type!=="Facebook" && <p className="Contact-Value">{n.value}</p>}
                </div>
        )
    }
    useEffect(()=>{AddContact()},[])
    return(
        <div className="Contact-Page">
            <Header />
            <div className="Contacts-Cards">
                {Contacts.map((c)=>{
                    return(
                        <ContactCard n={c}/>
                    )
                })}
            </div>
        </div>    
    )
}