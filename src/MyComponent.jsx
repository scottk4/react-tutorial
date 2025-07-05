import React, {useState} from 'react'

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0)
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = () => {
        setName("Spongebob");
    }

    const updateAge = () => {
        setAge(age+1);
    }
    const toggleEmployed = () => {
        setIsEmployed(!isEmployed)
    }
    return(<div>
        <p>Name: {name} </p>
        <button onClick={updateName}>Set name</button>

        <p>Age: {age} </p>
        <button onClick={updateAge}>Increment age</button>
        <p>Is employed: {isEmployed ? "Yes" : "No"} </p>
        <button onClick={toggleEmployed}>Toggle Status</button>
 
    </div>)
}
export default MyComponent