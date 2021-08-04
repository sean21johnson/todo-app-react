import React from 'react';

function Form({ onFormSubmit }) {


    return (
        <form onSubmit={onFormSubmit}>
            <input name="todo" placeholder="Enter your todo"></input>
            <label name="todo"></label>
        </form>
    )
}

export default Form;