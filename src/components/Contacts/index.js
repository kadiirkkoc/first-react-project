import List from "./List"
import Form from "./Form"
import {useState,useEffect} from "react"
import React  from "react"
import './styles.css'

function Contacts(){

    const [contacts,setContacts] = useState([
        {fullName : "mehmet" ,
            phoneNumber : 91234},
            {
                fullName : "kadir",
                phoneNumber : 5678
            },
            {
                fullName : "recep",
                phoneNumber : 1234
            },
            {
                fullName : "tayfun",
                phoneNumber : 54321
            }


    ]);

    useEffect(()=>{
        console.log(contacts)
    },[contacts])   

    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts = {contacts} />
            <Form addContact = {setContacts} contacts={contacts}/>
            
        </div>
    )
}


export default Contacts