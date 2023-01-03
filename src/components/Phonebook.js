import React,{useState} from 'react'

export default function Phonebook() {
    const [persons, setPersons] = useState([
        
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const updateName=(event)=>{
      setNewName(event.target.value)
    }

    const updateNumber=(event)=>{
      setNewNumber(event.target.value)
    }
   
  //adding the number
    const numberAdd=(event)=>{
    event.preventDefault()
    
    console.log(event.target)
    console.log(typeof(event.target.value))
    //function to check name
    const found=persons.some(person=>person.name === newName)
    console.log(found)
   
   
    if(!found){
      console.log('already in the list')
      const obj={
        name: newName,
        id: persons.length +1,
        number: newNumber
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
        <p>number: <input type="tel" onChange={updateNumber} value={newNumber}/></p>
        <button>add</button>
        </form>
    <h1>Numbers</h1>  
    <ul>
    {persons.map(person=>{
      console.log(person.id)
      return(
        <li key={person.id}>{person.name} : {person.number}</li>
      )
    })
    }
    </ul> 
    </div>
  )
}
