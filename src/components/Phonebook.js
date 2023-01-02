import React,{useState} from 'react'

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
    const obj={
      name: newName,
      id: persons.length +1
    }
    setPersons(persons.concat(obj))
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
