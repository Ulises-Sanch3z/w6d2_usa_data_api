import React from "react";

export default function PopulationDisplay({ data }) {
    // Check if user data is provided
    if (!data) {
        return <div></div>;
    }

    // Check for errors
    if (data.error) {
        return <div>Error: {data.error}</div>;
    }

    // display the population data. 
    return (
        <div className="PopulationDisplay">
            <h2>Population Data for {data.State}</h2> 
            <p>Population: {data.Population}</p> 
            <p>Year: {data.Year}</p> 
        </div>
    );
}
