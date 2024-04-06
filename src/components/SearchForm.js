import React, {useState} from "react";

export default function SearchForm({  onSubmit}) {
    //initialize state variable
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(input);
        setInput("")
    }
    return(
        <div className="SearchForm">
            <label htmlFor="input">Enter the state name:</label>
            <input
                type="text"
                id="input"
                name="input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    );
};