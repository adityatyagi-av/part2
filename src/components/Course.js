import React from 'react'

export function Sections({value}){
    const exercises = value.parts.map(part=>part.exercises)
    const total=exercises.reduce((s,p)=>{ return s+p;})
    return(
        <div>
            <h2>{value.name}</h2>
            <table>
                <tbody>
                {value.parts.map(part=>{
                
                return(
                    <tr key={part.id}>
                        {console.log(part)}
                        <th>{part.name}</th>
                        <th>{part.exercises}</th>
                    </tr>
                )
            })}
                </tbody>
            </table>
            <p><b>Total of {total} exercises</b></p>
        </div>
        
    )
}

export default function Course({course}) {
    console.log(course)
 
  return (
    <div>
        {course.map(component=>{
            return(
                <div key={component.id}>
                    <Sections value={component}/>
                </div>
                
            )
        })
        }
    </div>
  )
}
