import React, {useState} from 'react'

function MyComponent(){
    const [carObjs, setCarObjs] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(){
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel,
        }
        setCarObjs(c => [...c, newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }
    function handleRemoveCar(index){
        setCarObjs(c => c.filter((_, i) => i !== index));

    }
    function handleYearChange(event){
        setCarYear(event.target.value);
    }
    function handleMakeChange(event){
        setCarMake(event.target.value);
    }
    function handleModelChange(event){
        setCarModel(event.target.value);

    }
    return(
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {carObjs.map((car, index) => 
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>)}
            </ul>
            <input type="number" value={carYear}
                   onChange={handleYearChange}
                   placeholder="Enter year of car"/><br />
            <input type="text" value={carMake} 
                   onChange={handleMakeChange}
                   placeholder="Enter make of car"/><br />
            <input type="text" value={carModel}
                   onChange={handleModelChange}
                   placeholder="Enter model of car"/><br />
            
            <button onClick={handleAddCar}>Add Car</button>

        </div>
    );
}
export default MyComponent