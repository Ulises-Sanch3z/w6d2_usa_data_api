import '../App.css';
import PopulationDisplay from './PopulationDisplay';
import SearchForm from './SearchForm';
import React, { useState } from "react";

export default function App() {

  const [populationData, setPopulationData] = useState(null);
  const [error, setError] = useState(null);

  const fetchPopulationData = async (input) => {
    // Fetches population data from the datausa using user's input. 
    try {
      const response = await fetch("https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest");
      const jsonResponse = await response.json();
      console.log("Full API response:", jsonResponse);

      const stateData = jsonResponse.data.find(item => item.State.toLowerCase() === input.toLowerCase());
      console.log(stateData);
      
      // Updates state with population data or sets an error
      if (stateData) {
        setPopulationData(stateData);
      } else {
        console.log(`No data found for state: ${input}`);
        setError(`No data found for state: ${input}`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error retrieving data");
    }
  };
  

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>US Population Data</h1>
      </header>
      <SearchForm onSubmit={fetchPopulationData}/>
      {error ? <div>{error}</div> : <PopulationDisplay data={populationData} />}
    </div>
  );
};


