import React from "react"
import { useState , useEffect } from "react"

function Form({addContact,contacts}){

    const initialFormValues = {fullName : "" , phoneNumber : ""}
    
    const [form,setForm] = useState(initialFormValues)

    const onChangeInput = (event) => { setForm({...form,[event.target.name]: event.target.value}) }

    useEffect(()=>{
        setForm(initialFormValues)

    },[contacts])

    const onSubmit = (event) => {
        event.preventDefault();
        if(form.name ==="" || form.phoneNumber===""){
            return false
        }
        addContact([...contacts , form]);
        
    }

    return (
        <form onSubmit={onSubmit}>
            <div><input name="fullName" placeholder="fullName" value={form.fullName} onChange={onChangeInput}></input></div>
            <div><input name="phoneNumber" placeholder="phoneNumber" value={form.phoneNumber} onChange={onChangeInput}></input></div>
            
            <div className="btn">
                <button>Add</button>
            </div>
        </form>
    )
}


export default Form