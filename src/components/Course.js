import React from 'react'



export default function Course({course}) {
    console.log(course)
    const exercises = course.parts.map(part=>part.exercises)
    const total=exercises.reduce((s,p)=>{ return s+p;})
        
    
  return (
    <div>


        <h1>{course.name}</h1>
        <table>
            <tbody>
                {course.parts.map(part=>{
                
                    return(
                        <tr key={part.id}>
                            {console.log(part)}
                            <th>{part.name}</th>
                            <th>{part.exercises}</th><div className="3"></div>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <p><b>Total of {total} exercises</b></p>
        
    </div>
  )
}
