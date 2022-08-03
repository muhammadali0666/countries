import "./App.css";
import Header from "./components/header";
import { Card } from "./components/cards";
// import Loader from "../src/assets/img/loder.svg"

import { useEffect, useRef, useState } from "react";


function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');
  const [select, setSelect] = useState('');
  const elInput = useRef("");

  useEffect(() => {
   if (elInput.current.value) {
    fetch(`https://restcountries.com/v3.1/name/${elInput.current.value}`)
    .then((res) => res.json())
    .then((data) => setData(data))
    .catch((error) => console.log(error));
   }
   else if (select.length && select !== "All") {
    fetch(`https://restcountries.com/v3.1/region/${select}`)
    .then((res) => res.json())
    .then((data) => setData(data))
    .catch((error) => console.log(error));
   }
   else {
    fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => setData(data))
    .catch((error) => console.log(error));
   }
  }, [value, select]);

  const handleInputValue = (evt) => {
    evt.preventDefault()
    console.log(elInput.current.value);
    setValue(elInput.current.value)
  }

  return (
    <div className="container-fluid">
      <Header />
      <div className="d-flex justify-content-between">
        <form className="w-25" onSubmit={handleInputValue}> 
          <input className="" onChange={(evt) => setValue(evt.target.value)} ref={elInput} type="text" placeholder="search..." />
          <button className="bg-info ms-2 me-5" type="submit">
            Search
          </button>
        </form>
        <select className="w-25" onChange={(evt) => setSelect(evt.target.value)} defaultValue=''>
          <option value='All'>All</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africas</option>
          <option value="Americas">Americas</option>
        </select>
      </div>
      
      <ul className="card-list">
        {data.map((country) => (
          <Card
            key={data.id}
            img={country.flags.png}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
            subregion={country.subregion}
          ></Card>
          ))}
      </ul>
    </div>
  );
}


export default App;
