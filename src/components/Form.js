import React from 'react';

const Form = (props) => (
    <form onSubmit = {props.getWeather}>
        <input type = "number" name = "zip" placeholder = "Enter Zip Code"/>
        <button>Get Weather</button>
    </form>
)

export default Form;