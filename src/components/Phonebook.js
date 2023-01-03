import React,{useState} from 'react'
import { isEqual } from 'lodash';

export default function Phonebook() {
    const [persons, setPersons] = useState([
        
    ])
    const [newName, setNewName] = useState('Aditya Tyagi')

    const updateName=(event)=>{
      setNewName(event.target.value)
    }
    const numberAdd=(event)=>{
    event.preventDefault()
    console.log(event.target)
    console.log(typeof(event.target.value))
    const found=persons.some(person=>person.name === newName)
    console.log(found)
    if(!found){
      console.log('already in the list')
      const obj={
        name: newName,
        id: persons.length +1
      }
      console.log(obj)
      setPersons(persons.concat(obj))
      }
    else{
      alert(`${newName} is already in the phonebook, Save with new name`)
   
      }
    }
   

  return (
    <div>
        <h1>PhoneBook</h1>
        <form onSubmit={numberAdd}>
        <p>name: <input type="text" onChange={updateName} value={newName}/></p>
        
        <button>add</button>
        </form>
    <h1>Numbers</h1>  
    <ul>
    {persons.map(person=>{
      console.log(person.id)
      return(
        <li key={person.id}>{person.name}</li>
      )
    })
    }
    </ul> 
    </div>
  )
}
