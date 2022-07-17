import React , {useState} from "react"

function List({contacts}){
   
   const[filterText,setFilterText] = useState("")

   const filtered = contacts.filter((item)=> {

    return Object.keys(item).some((key)=>

        item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLowerCase())
    );
    });

    console.log("filtered",filtered)
   
    return (
        <div>

            <input placeholder="filter contact" value={filterText} onChange={(e)=> setFilterText(e.target.value)}></input>

            <ul className="list">
                {
                filtered.map((contact,index)=>  <li key={index}>{contact.fullName} <span>{contact.phoneNumber}</span> </li>  )
                }



            </ul>

            <p>{` There are (${filtered.length}) contacts`}</p>
       
        </div>
    )
}


export default List